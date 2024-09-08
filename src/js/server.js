import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;
env.config();
app.use(cors());

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
    return token;
  } catch (error) {
    console.log("Error while fetching access token", error);
    return null;
  }
}

app.post("/sendMail", async (req, res) => {
  const result = req.body;
  const { name, email, subject, body } = result;

  const accessToken = await getAccessToken();
  if (!accessToken) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate access token. Please try again later.",
    });
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.USER,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${body}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Email not sent. Please try again later.",
      });
    } else {
      console.log("Email sent: " + info.response);
      return res.json({ success: true, message: "Email sent successfully!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
