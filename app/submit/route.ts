import { NextResponse } from "next/server";
import { LangOption } from "@/utils/commonTypes";
import prisma from "@/utils/prismaClient";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("data", data);
    const save = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        language: data.language.toUpperCase() ?? "ENG",
      },
    });
    console.log("saved", save);
  } catch (error) {
    console.log("error mate", error);
  }

  // Return a response
  return NextResponse.json({ message: "whatever added" }, { status: 200 });
}
