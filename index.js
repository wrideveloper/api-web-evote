const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const md5 = require('md5');
const conn = require('./config/db.config');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());

const voteRouter = require('./src/routes/vote.route');
const userRoute = require('./routes/user.route');

app.use('/api/vote', voteRouter);
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('It is Working');
});

app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});
