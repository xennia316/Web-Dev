const express = require('express');
// const chalk = require('chalk');
// const debug = require('debbug');
// const morgan = require('morgan');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public/')));


app.get('/', (res, req) => {
    res.send("Hello from my app");
})

app.listen(3000, () => {
    console.log("How are you?")
});