// // subscribe.js
// import express from 'express';
// import path from 'path';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import { fileURLToPath } from 'url';
// import cors from 'cors';
// // Initialize Express
// const app = express();
// const PORT = process.env.PORT || 5000;
// app.use(cors()); 
// // Middleware
// app.use(bodyParser.json());

// // Resolve __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, 'frontend/build'))); // Serve React static files

// // Nodemailer configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',  // Use your email provider's service
//   auth: {
//     user: 'yourgiftingsolutions7@gmail.com',  // Replace with your email
//     pass: 'pbgh tgyt brut nece',   // Replace with your email password or app password
//   },
// });

// // API Route to handle subscription and send email
// app.post('/subscribe', (req, res) => {
//   const { email } = req.body;

//   // Create the email options
//   const mailOptions = {
//     from: 'yourgiftingsolutions7@gmail.com',
//     to: email,
//     subject: 'Welcome To The Vince Cafe Newsletter!',
//     text: 'Thank you for subscribing to Vince Cafe! We’re excited to have you!',
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error details:', error);
//       res.status(500).json({ message: 'Error Sending Email!!' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email Sent Successfully!!' });
//     }
//   });
  
// });

// // Serve React frontend
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend/build/index.html')); // Make sure the React app is built
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// subscribe.js
import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'frontend/build'))); // Serve React static files

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Use your email provider's service
  auth: {
    user: 'yourgiftingsolutions7@gmail.com',  // Replace with your email
    pass: 'pbgh tgyt brut nece',   // Replace with your email password or app password
  },
});

// API Route to handle subscription and send email
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Create the email options with HTML content
  const mailOptions = {
    from: 'yourgiftingsolutions7@gmail.com',
    to: email,
    subject: 'Welcome To The Vince Cafe Newsletter!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Welcome to Vince Cafe</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #0A0A0A;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #121212;
            border-radius: 8px;
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 2px solid #D9A030;
          }
          .header h1 {
            color: #FFFFFF;
            font-size: 2.5rem;
            font-family: 'Lobster', cursive;
          }
          .content {
            padding: 20px 0;
            color: #FFFFFF;
            font-size: 1rem;
            line-height: 1.6;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #D9A030;
            color: #FFFFFF;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 2px solid #D9A030;
            font-size: 0.9rem;
            color: #A8A8A8;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Vince Cafe!</h1>
          </div>
          <div class="content">
            <p>Hello,</p>
            <p>Thank you for subscribing to Vince Cafe! We’re excited to have you with us.</p>
            <p>Stay tuned for the latest updates, offers, and exclusive content coming your way!</p>
            <a href="http://localhost:5173/" class="button">Visit Our Website</a>
          </div>
          <div class="footer">
            <p>Best regards,<br>The Vince Cafe Team</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error details:', error);
      res.status(500).json({ message: 'Error Sending Email!!' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email Sent Successfully!!' });
    }
  });
});

// Serve React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html')); // Make sure the React app is built
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
