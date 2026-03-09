import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone || phone.length !== 10) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // In a real application, you would integrate with Twilio or MSG91 here.
    // For now, we'll just simulate a successful send.
    console.log(`[Mock OTP Send] Sending OTP to +91${phone}`);

    // You might generate a random OTP here and store it in a database/redis
    // associated with the phone number for verification later.
    // const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // await storeOtp(phone, otp); 

    return NextResponse.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
