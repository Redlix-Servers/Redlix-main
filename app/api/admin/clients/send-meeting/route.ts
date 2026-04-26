import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendMeetingConfirmation } from "@/utils/email";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { clientId } = body;

        if (!clientId) {
            return NextResponse.json(
                { success: false, message: "Missing client ID" },
                { status: 400 }
            );
        }

        const client = await prisma.client.findUnique({
            where: { id: clientId },
        });

        if (!client) {
            return NextResponse.json(
                { success: false, message: "Client not found" },
                { status: 404 }
            );
        }

        if (!client.meetingTime) {
            return NextResponse.json(
                { success: false, message: "No meeting scheduled for this client" },
                { status: 400 }
            );
        }

        const result = await sendMeetingConfirmation({
            to: client.email,
            clientName: client.clientName,
            companyName: client.companyName,
            appName: client.appName || undefined,
            phone: client.phone || undefined,
            template: client.meetingTemplate || "Discovery Call",
            meetingTime: client.meetingTime.toISOString(),
            developerName: client.developerName || undefined,
            meetingLink: client.meetingLink || undefined,
        });

        if (result.success) {
            return NextResponse.json({
                success: true,
                message: "Meeting details sent successfully",
            });
        } else {
            return NextResponse.json(
                { success: false, message: "Failed to send email" },
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
