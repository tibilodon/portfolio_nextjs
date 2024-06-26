import { NextResponse } from "next/server";
import prisma from "@/utils/prismaClient";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        language: data.language.toUpperCase() ?? "ENG",
      },
    });
  } catch (error) {
    //create error log
    console.log("--ERROR--", error);
    await prisma.logs.create({
      data: {
        title: `--ERROR--, ${error}`,
        file_name: "app/api/submit/route.ts",
        line_number: 5,
      },
    });
  }

  // Return a response
  return NextResponse.json({ message: "whatever added" }, { status: 200 });
}
