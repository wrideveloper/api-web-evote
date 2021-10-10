const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const md5 = require('md5');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const voteRouter = require('./src/routes/vote.route');
const userRoute = require('./routes/user.route');

app.use('/vote', voteRouter);
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('Welcome to API Web E-Vote!');
});

app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});
