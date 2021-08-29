import express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();

import dotenv from 'dotenv';
dotenv.config();
const { GMAIL, MAILPASS } = process.env;

const transport = {
  service: 'Gmail',
  auth: {
    user: GMAIL,
    pass: MAILPASS
  }
};

const transporter = nodemailer.createTransport(transport)
router.post('/send', (req, res) => {
  const mail = {
    from: 'Inah',
    to: req.body.email,
    subject: 'Mail Send to Nodemailer',
    html: '<p>Welcome to Nodemailer 💌</p>'
  }
  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        message: 'fall'
      })
    } else {
      res.json({
        message: 'success'
      });
    };
  });
});

export default router;