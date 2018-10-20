const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/:total', function(req, res) {
    const total = req.params.total;
    let response;

    if (isNaN(total)) {
        res.statusCode = 400;
        res.send("Parameter must be a number")
        return;
    }

    res.send(total);
})

module.exports.handler = serverless(app);