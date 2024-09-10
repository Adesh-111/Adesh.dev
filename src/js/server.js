import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const app = express();
env.config();  // Ensure this is loaded before the app starts

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ['https://adesh-dev.vercel.app'],  // Allow specific origin
    methods: ['POST'], 
  })
);

const port = process.env.PORT || 3000;

const { OAuth2 } = google.auth;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // Redirect URI for OAuth
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

// Test route to check if server is running
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express Server on Vercel!</h1>");
});

// API route to handle email sending
app.post("/sendMail", async (req, res) => {
  const { name, email, subject, body } = req.body;

  try {
    const accessToken = await getAccessToken();
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.USER, // Your Gmail address
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: email, // Sender email
      to: process.env.USER, // Your email (receiver)
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${body}`,
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

