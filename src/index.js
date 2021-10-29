const express = require('express');
const session = require('express-session');
const cors = require('cors');

// Define express
const app = express();
const port = process.env.PORT || 3000;

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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const voteRouter = require('./routes/vote.route');
const userRouter = require('./routes/user.route');
const calonRouter = require('./routes/calon.route');

app.use('/vote', voteRouter);
app.use('/user', userRouter);
app.use('/calon', calonRouter);

app.get('/', (req, res) => {
    res.send('Welcome to API Web E-Vote!');
});

app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});
