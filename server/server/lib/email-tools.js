import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";
import {getPdfReadableStream} from './pdf-tools.js'


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendEmail = async (recipent, subject, message) => {
    const appointment = {
        "doctor": "Maisey William",
        "date": "July 15, 2022",
        "time": "10:00-11:00",
        "poster": "http://localhost:4000/image/etxcy59pol1ysvh06.jpg",
      }

    const pdfAsStream = getPdfReadableStream(appointment)
    const arrayOfChunks = [];
    pdfAsStream.on("data",  function (chunk) {
      arrayOfChunks.push(chunk);
    });
    pdfAsStream.on("end", async function () {
      const pdfAsBuffer = Buffer.concat(arrayOfChunks);
      const attachment = pdfAsBuffer.toString("base64");

    const msg = {
        to: recipent,
        from: process.env.SENDER,
        subject: subject,
        text: message,
        html: `<strong>${message}</strong>`,
        attachments: [
            {
              content: attachment,
              filename: "attachment.pdf",
              type: "application/pdf",
              disposition: "attachment",
            },
          ],
    }

    await sgMail.send(msg)

})
}