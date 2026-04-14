import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";

dotenv.config();

console.log("🔥 SERVER STARTING...");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());
app.use(express.json());

/* =========================
   EMAIL API
========================= */

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

    // 📧 Email to YOU
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

    // 📧 Auto reply to CLIENT
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We’ve received your inquiry — CoderCreative Studio",
      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2>Hello ${name},</h2>
          <p>We’ve received your message and will respond shortly.</p>
          <p><b>Your message:</b></p>
          <p>${message}</p>
          <br/>
          <p>— CoderCreative Studio</p>
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

/* =========================
   SERVE FRONTEND (IMPORTANT)
========================= */

// project root path
const __dirname = path.resolve();

// serve frontend build
app.use(express.static(path.join(__dirname, "frontend/dist")));

// fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});