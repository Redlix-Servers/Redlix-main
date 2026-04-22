import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const tickets = await prisma.supportTicket.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({
            success: true,
            data: tickets,
        });
    } catch (error) {
        console.error("Admin Support API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch support tickets" },
            { status: 500 }
        );
    }
}
