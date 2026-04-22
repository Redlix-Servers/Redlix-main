import { NextResponse } from "next/server";
import { sendOfferLetter } from "@/utils/email";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { employeeId } = body;

        if (!employeeId) {
            return NextResponse.json(
                { success: false, message: "Missing employee ID" },
                { status: 400 }
            );
        }

        const employee = await prisma.employee.findUnique({
            where: { id: employeeId },
        });

        if (!employee) {
            return NextResponse.json(
                { success: false, message: "Employee not found" },
                { status: 404 }
            );
        }

        if (!employee.offerLetterLink) {
            return NextResponse.json(
                { success: false, message: "Offer letter link is missing for this employee" },
                { status: 400 }
            );
        }

        const result = await sendOfferLetter({
            to: employee.email,
            name: employee.name,
            role: employee.role,
            offerLetterLink: employee.offerLetterLink,
        });

        if (result.success) {
            return NextResponse.json({
                success: true,
                message: "Offer letter sent successfully",
            });
        } else {
            return NextResponse.json(
                { success: false, message: "Failed to send offer letter" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Admin API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
