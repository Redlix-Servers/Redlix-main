import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { isRead } = body;

        const updated = await prisma.contactInquiry.update({
            where: { id: parseInt(id) },
            data: { isRead: isRead },
        });

        return NextResponse.json({
            success: true,
            data: updated,
        });
    } catch (error) {
        console.error("Inquiry Update Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to update inquiry" },
            { status: 500 }
        );
    }
}
