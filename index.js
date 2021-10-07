const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const conn = require('./config/db.config');
const userRoute = require('./routes/user.route');
const md5 = require('md5');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Testing Server
app.get('/', (req, res) => {
    res.send('It is Working');
});

app.use('/user', userRoute);

app.listen(port, () => {
    console.log('Server Running');
});