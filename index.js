require('dotenv').config();
const express = require('express');
const path = require('path')
// const nodemailer = require('nodemailer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(__dirname + '/assets'));

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.render('index')
});

app.get("/about", (req, res) => {
  res.render('about')
});

app.get("/services", (req, res) => {
  res.render('services')
});

app.get('/services/:slug', async (req, res) => {
  const slug = req.params.slug;
  res.render(slug);
});

app.get("/blog", (req, res) => {
  res.render('blog')
});

app.get("/solutions", (req, res) => {
  res.render('solutions')
});

app.get('/solutions/:slug', async (req, res) => {
  const slug = req.params.slug;
  res.render(slug);
});

app.get("/solutions-l2", (req, res) => {
  res.render('solutions-l2')
});

app.get("/terms-of-use", (req, res) => {
  res.render('terms-of-use')
});

app.get("/privacy-policy", (req, res) => {
  res.render('privacy-policy')
});

app.get("/inustries", (req, res) => {
  res.render('inustries')
});

app.get("/faq", (req, res) => {
  res.render('faq')
});


app.get("/careers", (req, res) => {
  res.render('careers')
});

// this is for contact start
app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'SMTP',
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.GMAIL,
    to: "development@sovorun.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPhone: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);

    } else {
      console.log('Email sent successfully');
      res.redirect('/');
    }
  });
});
// this is for contact end
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`)); 