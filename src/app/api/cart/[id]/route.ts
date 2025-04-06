import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "../../../../../generated/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

const prisma = new PrismaClient();

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: productId } = await params;
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = session.user;
    const userId = user._id;

    const checkProduct = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!checkProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const checkCart = await prisma.cart.findFirst({
      where: {
        userId: userId,
        productId: checkProduct.id,
      },
    });

    if (!checkCart) {
      const cart = await prisma.cart.create({
        data: {
          quantity: 1,
          productId: checkProduct.id,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return NextResponse.json({ meassage: "Product added to cart", cart });
    }

    const update = await prisma.cart.update({
      where: {
        id: checkCart.id,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });

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
