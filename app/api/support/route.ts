import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendSupportConfirmation } from "@/utils/email";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create ticket in database
        const ticket = await prisma.supportTicket.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        // Send confirmation email
        await sendSupportConfirmation({
            to: email,
            name,
            ticketId: ticket.id,
            subject: subject,
        });

        return NextResponse.json({
            success: true,
            data: ticket,
        });
    } catch (error) {
        console.error("Support API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
