import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Contact inquiry", data);

  return NextResponse.json({ message: "Received" }, { status: 200 });
}
