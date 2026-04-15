import { NextResponse } from "next/server";
import { createAssessment } from "@/utils/recaptcha";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token, formData } = body;

        if (!token) {
            return NextResponse.json(
                { success: false, message: "Missing reCAPTCHA token" },
                { status: 400 }
            );
        }

        // 1. Verify reCAPTCHA Token
        const assessment = await createAssessment({
            token: token,
            recaptchaAction: "CONTACT",
        });

        if (!assessment.success || (assessment.score !== undefined && assessment.score < 0.5)) {
            return NextResponse.json(
                { 
                    success: false, 
                    message: "reCAPTCHA verification failed or low score",
                    score: assessment.score 
                },
                { status: 403 }
            );
        }

        // 2. Process Form Data - Save to database
        const inquiry = await prisma.contactInquiry.create({
            data: {
                name: String(formData.name),
                email: String(formData.email),
                phone: formData.phone ? String(formData.phone) : null,
                company: formData.company ? String(formData.company) : null,
                website: formData.website ? String(formData.website) : null,
                businessType: formData.businessType ? String(formData.businessType) : null,
                turnover: formData.turnover ? String(formData.turnover) : null,
                service: formData.service ? String(formData.service) : null,
                budget: formData.budget ? String(formData.budget) : null,
                timeline: formData.timeline ? String(formData.timeline) : null,
                preferredDateTime: formData.preferredDateTime ? new Date(String(formData.preferredDateTime)) : null,
                timezone: formData.timezone ? String(formData.timezone) : null,
                preferredMode: formData.preferredMode ? String(formData.preferredMode) : null,
                message: String(formData.message),
            },
        });

        return NextResponse.json({
            success: true,
            message: "Your message has been received. We will get back to you soon.",
            data: { id: inquiry.id }
        });

    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { success: false, message: "An internal error occurred while processing your request." },
            { status: 500 }
        );
    }
}
