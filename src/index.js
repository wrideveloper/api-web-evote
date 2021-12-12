const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')

// Define express
const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Define cors
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const voteRouter = require('./routes/vote.route');
const userRouter = require('./routes/user.route');
const calonRouter = require('./routes/calon.route');
const harapanRouter = require('./routes/harapan.route');

app.use('/vote', voteRouter);
app.use('/user', userRouter);
app.use('/calon', calonRouter);
app.use('/harapan', harapanRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

//Node Mailer
app.post('/', async (req, res) => {
    const {email} = req.body;
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'katheryn.stehr78@ethereal.email',
            pass: 'ZseTbC846Ggu3uQDM8'
        }
    });
    const msg = {
        from: '"Express" <ExpressJS@gmail.com>', // sender address
        to: `${email}`, // list of receiver
        subject: "WRI E-Vote Kredensial Anda", // Subject line
        text: "Yoo", // plain text body
        html: "<b>Password Anda: </b>userPass", // html body
    }
    // send mail with defined transport object
    let info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send('Email Sent!')
});

app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});