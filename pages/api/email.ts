import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";

async function checkCaptcha(token: string) {
  const { CAPTCHA_PRIVATE_KEY } = process.env;

  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_PRIVATE_KEY}&response=${token}`
  );

  return data.success;
}

async function sendEmail(name: string, email: string, text: string) {
  const { SERVER_EMAIL_SERVICE, EMAIL_ADDRESS, SERVER_EMAIL_ADDRESS, SERVER_EMAIL_PASSWORD } =
    process.env;

  const message = {
    from: email,
    to: EMAIL_ADDRESS,
    subject: "Portfolio - Nouveau message",
    text,
    html: `
      <p>
        ${text}

        <br>
        <br>
        <br>
        <strong>--------------------</strong>
        <br>
        <br>
        <strong>Nom:</strong> ${name}
        <br>
        <strong>Email:</strong> ${email}
      </p>`,
  };

  const transporter = nodemailer.createTransport({
    service: SERVER_EMAIL_SERVICE,
    auth: {
      user: SERVER_EMAIL_ADDRESS,
      pass: SERVER_EMAIL_PASSWORD,
    },
  });

  return transporter.sendMail(message);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, text, captchaToken } = req.body;

  if (req.method === "POST") {
    try {
      const isCaptchaValid: boolean = await checkCaptcha(captchaToken);

      if (isCaptchaValid) {
        await sendEmail(name, email, text);
        return res.status(200).json({ message: "Email has been sent" });
      } else {
        return res.status(409).json({ error: "Captcha refused" });
      }
    } catch (error) {
      return res.status(404).json({ error: "Connection refused" });
    }
  }
}
