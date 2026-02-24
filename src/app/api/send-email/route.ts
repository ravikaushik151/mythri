import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // ✅ Environment variables (make sure they match your .env.local)
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { success: false, message: "SMTP credentials not configured." },
        { status: 500 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, //  Ignore self-signed certificate
      },
    });

    // Optional: verify connection
    await transporter.verify();

    // ✅ Prepare email
    const mailOptions = {
      from: `"Mythri Builders" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: "Enquire from Mythri Builders website",
      html: `
        <h2> Enquire from Mythri Builders website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p style="font-size:12px;color:#888;">This message was sent via the Channel Partner form on your website.</p>
      `,
    };

    //  Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your request has been submitted successfully.",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
