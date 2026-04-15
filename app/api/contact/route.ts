import { NextResponse } from "next/server";
import { createAssessment } from "@/utils/recaptcha";
import prisma from "@/lib/prisma";
import { sendAutoReply } from "@/utils/email";

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

        // 1. Verify reCAPTCHA Token using REST API
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

        // 3. Send Auto-reply Email
        await sendAutoReply({
            to: String(formData.email),
            name: String(formData.name)
        });

        return NextResponse.json({
            success: true,
            message: "Your message has been received. We will get back to you soon.",
            data: { id: inquiry.id }
        });

    } catch (error: any) {
        console.error("Contact API Error:", error);
        
        // Provide cleaner error messages to the user
        let errorMessage = "An internal error occurred.";
        if (error.code || error.message?.includes("prisma") || error.message?.includes("database")) {
            errorMessage = "Database connection failed. Please try again later.";
        }

        return NextResponse.json(
            { 
                success: false, 
                message: errorMessage,
                debug: process.env.NODE_ENV === "development" ? error.message : undefined
            },
            { status: 500 }
        );
    }
}
