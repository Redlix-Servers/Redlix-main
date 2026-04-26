import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idStr } = await params;
        const id = parseInt(idStr);
        const body = await req.json();
        
        const client = await prisma.client.update({
            where: { id },
            data: {
                ...body,
                meetingTime: body.meetingTime ? new Date(body.meetingTime) : undefined,
            },
        });

        return NextResponse.json({
            success: true,
            data: client,
        });
    } catch (error) {
        console.error("Admin API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to update client" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idStr } = await params;
        const id = parseInt(idStr);
        await prisma.client.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Client deleted successfully",
        });
    } catch (error) {
        console.error("Admin API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to delete client" },
            { status: 500 }
        );
    }
}
