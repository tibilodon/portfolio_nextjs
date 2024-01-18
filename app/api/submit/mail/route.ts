import { NextResponse } from "next/server";
import sendEmail from "@/utils/sendEmail";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;
    await sendEmail(name, email, message);
  } catch (error) {
    console.log("--ERROR--", error);
  }

  // Return a response
  return NextResponse.json(
    { message: "Message submitted successfully" },
    { status: 200 }
  );
}
