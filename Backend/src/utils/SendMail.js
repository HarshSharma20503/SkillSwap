import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.APP_PASSWORD,
  },
});

const sendMail = async (to, subject, Message) => {
  const mailOptions = {
    from: process.env.EMAIL_ID,
    to: [to],
    subject: subject,
    html: Message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent succesfully");
    return true;
  } catch (error) {
    console.log("Error while sending  email", error);
    return false;
  }
};

export { sendMail };
