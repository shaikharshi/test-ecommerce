require('dotenv').config();
const express = require('express');
const path = require('path')
const nodemailer = require('nodemailer');

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

  arr = ['ecommerce-store-setup', 'product-listing-optimization', 'inventory-management', 'order-processing-fulfilment', 'customer-support', 'seo-digital-marketing', 'analytics-reporting', 'website-maintenance-updates', 'platform-migration-upgrades', 'marketplace-management', 'custom-development', 'add-campaigns']
  if (arr.includes(slug)) {
    console.log(true);
    res.render(slug);
  } else {
    res.render('404')
  }
});


app.get("/blog", (req, res) => {
  res.render('blog')
});


app.get('/blog/:slug', async (req, res) => {
  const slug = req.params.slug;

  arr = ['ecommerce-store-setup-compelete-guide', 'maximizing-roi-data-driven-seo-strategies', 'power-social-media-advertising-ecommerce', 'navigating-world-cross-border-ecommerce-tips-international-expansion']
  if (arr.includes(slug)) {
    console.log(true);
    res.render(slug);
  } else {
    res.render('404')
  }
});



app.get("/contact-us", (req, res) => {
  res.render('contact-us')
});

app.get("/solutions", (req, res) => {
  res.render('solutions')
});


app.get('/solutions/:slug', async (req, res) => {
  const slug = req.params.slug;

  arr = ['amazon-management', 'flipkart-management', 'meesho-management', 'jiomart-management', "myntra-management", "alibaba-management", "tatacliq-management", "walmart-management", "indiamart-management"]
  if (arr.includes(slug)) {
    console.log(true);
    res.render(slug);
  } else {
    res.render('404')
  }
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

app.get('/careers/:slug', async (req, res) => {
  const slug = req.params.slug;
  arr = ['digital-marketing-specialist', 'ecommerce-account-manager', 'web-developer',]
  if (arr.includes(slug)) {
    console.log(true);
    res.render(slug);
  } else {
    res.render('404')
  }
});


// this is for contact start
app.post('/contact-us', async (req, res) => {
  const { name, email, message } = req.body;

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
    subject: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
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


// NEWSLETTER

app.post('/news-letter', async (req, res) => {
  const abc = req.body.email;

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
    to: abc,
    subject: 'Newsletter Subscription Confirmation',
    text: 'Thank you for subscribing to our newsletter!'
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);

    } else {
      console.log('NewsLetter Email sent successfully');
      res.redirect('/');
    }
  });
});
// NEWSLETTER END

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`)); 