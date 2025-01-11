import nodemailer from "nodemailer";

export const Mailer = ({ email, text }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "xsm9512368740@gmail.com",
      pass: "gutjfedmajlelogv",
    },
  });

  const mailOptions = {
    from: "xsm9512368740@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    html: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log({ error });
    } else {
      console.log({ message: info.response });
    }
  });
};
