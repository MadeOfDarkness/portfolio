const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lfernando.montano@alumnos.udg.mx',
      pass: 'Luisfernando15@'
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: 'lfernando.montano@alumnos.udg.mx',
    subject: `Mensaje de ${req.body.name}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      console.log(info);
      res.send('success');
    }
  });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));