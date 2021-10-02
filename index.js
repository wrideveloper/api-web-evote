const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

const voteRouter = require('./src/routes/vote.route');

app.use('/api/vote', voteRouter);

app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});