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
    origin: ['https://adesh-dev.vercel.app'],  
    methods: ['POST'], 
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
      text: `You have received a new message from your website contact form.
    
    Details:
    ---------------------------------------
    Name:        ${name}
    Email:       ${email}
    Subject:     ${subject}
    ---------------------------------------
    
    Message:
    ---------------------------------------
    ${body}
    ---------------------------------------
    
    Please respond to the user directly via their provided email: ${email}.`,
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

