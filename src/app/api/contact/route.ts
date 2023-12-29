import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { body }: IParams) {
  const result2 = await req.json();

  console.log("adding comment", result2);
  const { name, email, message } = result2;

  try {
    return NextResponse.json({
      message: "email sent",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
