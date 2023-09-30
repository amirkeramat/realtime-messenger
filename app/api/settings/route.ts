import prisma from "@/app/libs/prismadb";

import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const currentUser = await getCurrentUser();
    const { name, image } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new Response("Name is required", { status: 503 });
    }

    if (!image) {
      return new Response("Image url is required", { status: 502 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        image,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error, "ERROR_SETTINGS");

    return new Response("Internal Error", { status: 500 });
  }
}
