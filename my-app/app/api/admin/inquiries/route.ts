import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const inquiries = await prisma.contactInquiry.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({
            success: true,
            data: inquiries,
        });
    } catch (error) {
        console.error("Admin API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch inquiries" },
            { status: 500 }
        );
    }
}
