import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendMeetingConfirmation } from "@/utils/email";

export async function GET() {
    try {
        const clients = await prisma.client.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({
            success: true,
            data: clients,
        });
    } catch (error) {
        console.error("Admin API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch clients" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { companyName, appName, clientName, email, phone, meetingTemplate, meetingTime, developerName, meetingLink } = body;

        if (!companyName || !clientName || !email) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if client exists
        const existingClient = await prisma.client.findUnique({
            where: { email },
        });

        let client;
        if (existingClient) {
            // Update/Reschedule existing client
            client = await prisma.client.update({
                where: { email },
                data: {
                    companyName,
                    appName,
                    clientName,
                    phone,
                    meetingTemplate,
                    meetingTime: meetingTime ? new Date(meetingTime) : null,
                    developerName,
                    meetingLink,
                },
            });
        } else {
            // Create new client
            client = await prisma.client.create({
                data: {
                    companyName,
                    appName,
                    clientName,
                    email,
                    phone,
                    meetingTemplate,
                    meetingTime: meetingTime ? new Date(meetingTime) : null,
                    developerName,
                    meetingLink,
                },
            });
        }

        // Send confirmation email if meeting is scheduled
        if (meetingTime) {
            await sendMeetingConfirmation({
                to: email,
                clientName,
                companyName,
                appName: appName || undefined,
                phone: phone || undefined,
                template: meetingTemplate || "Discovery Call",
                meetingTime,
                developerName,
                meetingLink,
            });
        }

        return NextResponse.json({
            success: true,
            data: client,
        });
    } catch (error) {
        console.error("Admin API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to create client" },
            { status: 500 }
        );
    }
}
