import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idStr } = await params;
        const body = await req.json();
        const { status } = body;
        const id = parseInt(idStr);

        if (isNaN(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid ticket ID" },
                { status: 400 }
            );
        }

        const ticket = await prisma.supportTicket.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json({
            success: true,
            data: ticket,
        });
    } catch (error) {
        console.error("Admin Support API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to update ticket" },
            { status: 500 }
        );
    }
}
