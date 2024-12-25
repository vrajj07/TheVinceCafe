// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post('/ReservationEmail', async (req, res) => {
//   const { resName, resEmail, resPhone, resDate, resTime, resPeople, resMessage } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'yourgiftingsolutions7@gmail.com',  // Replace with your email
//       pass: 'pbgh tgyt brut nece',   // Replace with your email password or app password
//     },
//   });

//   const mailOptions = {
//     from: 'yourgiftingsolutions7@gmail.com',
//     to: resEmail,
//     subject: 'Table Reservation Confirmation',
//     text: `
//       Hello ${resName},

//       Thank you for reserving a table with us!

//       Here are the details of your reservation:
//       - Name: ${resName}
//       - Phone: ${resPhone}
//       - Date: ${resDate}
//       - Time: ${resTime}
//       - Number of People: ${resPeople}
//       - Message: ${resMessage}

//       We look forward to seeing you soon!

//       Best regards,
//       The Vince Cafe
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Reservation confirmed, email sent!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Error sending reservation email' });
//   }
// });

// const PORT = 5500;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/ReservationEmail', async (req, res) => {
  const { resName, resEmail, resPhone, resDate, resTime, resPeople, resMessage } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourgiftingsolutions7@gmail.com',  // Replace with your email
      pass: 'pbgh tgyt brut nece',   // Replace with your email password or app password
    },
  });

  const mailOptions = {
    from: 'yourgiftingsolutions7@gmail.com',
    to: resEmail,
    subject: 'Table Reservation Confirmation',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Reservation Confirmation</title>
      </head>
      <body style="font-family: 'Arial', sans-serif; background-color: #0A0A0A; color: #FFFFFF; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #121212; border-radius: 8px;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #D9A030;">
            <h1 style="color: #FFFFFF; font-size: 2.5rem; font-family: 'Lobster', cursive;">The Vince Cafe</h1>
          </div>
          <div style="padding: 20px 0;">
            <p style="line-height: 1.6; font-size: 1rem; color: #FFFFFF;">Hello ${resName},</p>
            <p style="line-height: 1.6; font-size: 1rem; color: #FFFFFF;">Thank you for reserving a table with us! We're excited to host you.</p>
            <div style="margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; font-weight: 700; color: #D9A030; width: 40%;">Name:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; color: #FFFFFF;">${resName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; font-weight: 700; color: #D9A030;">Phone:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; color: #FFFFFF;">${resPhone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; font-weight: 700; color: #D9A030;">Date:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; color: #FFFFFF;">${resDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; font-weight: 700; color: #D9A030;">Time:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; color: #FFFFFF;">${resTime}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; font-weight: 700; color: #D9A030;">Number of People:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; color: #FFFFFF;">${resPeople}</td>
                </tr>
                ${resMessage ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; font-weight: 700; color: #D9A030;">Message:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #333333; color: #FFFFFF;">${resMessage}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            <p style="line-height: 1.6; font-size: 1rem; color: #FFFFFF;">We look forward to seeing you soon!</p>
            <a href="http://localhost:5173/" style="display: inline-block; padding: 10px 20px; background-color: #D9A030; color: #FFFFFF; text-decoration: none; border-radius: 5px; margin-top: 20px;">Visit Our Website</a>
          </div>
          <div style="text-align: center; padding-top: 20px; border-top: 2px solid #D9A030; font-size: 0.9rem; color: #A8A8A8;">
            <p>Best regards,<br>The Vince Cafe Team</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Reservation confirmed, email sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending reservation email' });
  }
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

