const express = require('express');
const app = express();

// server port
const port = process.env.PORT || 3000;


// listen to the port
app.listen(port, function() {
    console.log(`server listening on port ${port}`);
})