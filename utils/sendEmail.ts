import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    //email address
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PW,
  },
});

let tt: string = process.env.EMAIL_USER!;

const sendEmail = async (name: string, email: string, message: string) => {
  try {
    const info = await transporter.sendMail({
      from: {
        name: "Portfolio APP",
        address: tt,
      },
      to: [tt],
      subject: "Nem message from " + name,
      html: `
      <html>
      <body style="border: 2px solid black; padding:2em;">
      <p><b>Name: </b><br>${name}</p>
      <p><b>E-mail: </b><br>${email}</p>
      <p><b>Message: </b><br>${message}</p>
      </body>
      </html>`,
    });
    console.log("Email sent:", info);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export default sendEmail;
