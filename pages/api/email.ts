import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { SERVER_EMAIL_SERVICE, EMAIL_ADDRESS, SERVER_EMAIL_ADDRESS, SERVER_EMAIL_PASSWORD } =
    process.env;
  const { name, email, text } = req.body;

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

  if (req.method === "POST") {
    try {
      await transporter.sendMail(message);
      return res.status(200).json({ message: "Email has been sent" });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: `Connection refused` });
    }
  }
}
