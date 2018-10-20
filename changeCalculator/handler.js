const serverless = require('serverless-http');
const express = require('express')
const app = express()

// Get User endpoint
app.get('/:total', function(req, res) {
    res.send(req.params.total);
})

module.exports.handler = serverless(app);