import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // ✅ Check environment variables
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const ADMIN_EMAIL =
      process.env.MAIL_RECEIVER || process.env.ADMIN_EMAIL || EMAIL_USER;

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error(" Missing EMAIL_USER or EMAIL_PASS in environment variables");
      return NextResponse.json(
        { success: false, message: "Email credentials not configured." },
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
        rejectUnauthorized: false,
      },
    });

    // Optional: verify SMTP connection
    await transporter.verify();

    // ✅ Prepare the email
    const mailOptions = {
      from: `"Mythri Builders" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: "New Channel Partner Enquiry",
      html: `
        <h2>New Channel Partner Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p style="font-size:12px;color:#888;">This message was sent via the Channel Partner form on your website.</p>
      `,
    };

    // ✅ Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "✅ Thank you! Your request has been submitted successfully.",
    });
  } catch (error) {
    console.error(" Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
