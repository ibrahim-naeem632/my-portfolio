import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

console.log("🔥 SERVER STARTING...");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ EMAIL API
app.post("/api/contact", async (req, res) => {
  const { name, email, projectType, message } = req.body;

  console.log("📩 Data received:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📧 1. Email to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Project:</b> ${projectType}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 📧 2. AUTO REPLY to CLIENT 🔥
    await transporter.sendMail({
     from: process.env.EMAIL_USER,
  to: email,
  subject: "We’ve received your inquiry — CoderCreative Studio",
  html: `
  <div style="font-family: Arial, sans-serif; background:#f6f7fb; padding:40px 0;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
      
      <!-- HEADER -->
      <div style="background:#2f5d50; padding:20px; text-align:center;">
        <h1 style="color:#ffffff; margin:0; font-size:20px;">
          CoderCreative Studio
        </h1>
      </div>

      <!-- BODY -->
      <div style="padding:30px; color:#333;">
        
        <h2 style="margin-top:0;">Hello ${name},</h2>

        <p>
          Thank you for reaching out to <strong>CoderCreative Studio</strong>. 
          We’ve received your message and our team is currently reviewing your request.
        </p>

        <p>
          We aim to respond as soon as possible with the next steps.
        </p>

        <!-- MESSAGE BOX -->
        <div style="background:#f4f6f8; padding:15px; border-radius:8px; margin:20px 0;">
          <p style="margin:0;"><strong>Your Message:</strong></p>
          <p style="margin-top:8px;">${message}</p>
        </div>

        <p>
          If you have additional details, feel free to reply to this email.
        </p>

        <p style="margin-top:30px;">
          Best regards,<br/>
          <strong>CoderCreative Studio</strong><br/>
          <span style="color:#666;">Digital Solutions & Web Development</span>
        </p>

      </div>

      <!-- FOOTER -->
      <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        © ${new Date().getFullYear()} CoderCreative Studio. All rights reserved.
      </div>

    </div>

  </div>
  `,
});

    console.log("✅ Emails sent");

    res.json({ success: true });

  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ error: "Email failed" });
  }
});

// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});