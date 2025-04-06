import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "../../../../../generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

const prisma = new PrismaClient();

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = params.id;
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = session.user;
    const userId = user._id;

    const data = await prisma.cart.findFirst({
      where: {
        productId: productId,
        userId: userId,
      },
    });

    const update = await prisma.cart.update({
      where: {
        id: data?.id,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });

    if (!data) {
      const createData = await prisma.cart.create({
        data: {
          productId: productId,
          quantity: 1,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return NextResponse.json(createData);
    }
    NextResponse.json(update);
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
