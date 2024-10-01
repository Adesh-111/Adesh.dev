import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const app = express();
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["https://adesh-dev.vercel.app"],
    methods: ["POST"],
  })
);

const port = process.env.PORT || 3000;

const { OAuth2 } = google.auth;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

async function getAccessToken() {
  try {
    const { token } = await oauth2Client.getAccessToken();
    if (!token) throw new Error("No access token returned");
    return token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express Server on Vercel!</h1>");
});

app.post("/sendMail", async (req, res) => {
  const { name, email, subject, body } = req.body;

  try {
    const accessToken = await getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.USER,
      replyTo: email,
      subject: subject,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #007bff;">New Message from Website Contact Form</h2>
        
        <p>You have received a new message from your website contact form. Below are the details:</p>
        
        <hr style="border: 1px solid #ddd; margin-bottom: 20px;">
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; background-color: #f9f9f9; font-weight: bold;">Name:</td>
            <td style="padding: 8px 12px; background-color: #f9f9f9;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold;">Email:</td>
            <td style="padding: 8px 12px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background-color: #f9f9f9; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 12px; background-color: #f9f9f9;">${subject}</td>
          </tr>
        </table>
        
        <hr style="border: 1px solid #ddd; margin-top: 20px; margin-bottom: 20px;">
        
        <h3>Message:</h3>
        <div style="padding: 10px; background-color: #f1f1f1; border-radius: 8px; white-space: pre-wrap;">
          ${body}
        </div>
        
        <p style="margin-top: 20px;">Please respond directly to the user via their provided email: <a href="mailto:${email}" style="color: #007bff;">${email}</a>.</p>
      </div>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          success: false,
          message: "Email not sent. Please try again later.",
        });
      }
      console.log("Email sent:", info.response);
      return res.json({ success: true, message: "Email sent successfully!" });
    });
  } catch (error) {
    console.error("Error in sendMail function:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email due to internal server error.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
