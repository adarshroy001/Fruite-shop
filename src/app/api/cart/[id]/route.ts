import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const data = await prisma.cart.update({
      where: {
        id: id,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });
    NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update cart" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const data = await prisma.cart.update({
      where: {
        id: id,
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });
    NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete cart" },
      { status: 500 }
    );
  }
}
