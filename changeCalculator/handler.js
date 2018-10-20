const serverless = require('serverless-http');
const express = require('express');
const app = express();

const calculateChange = require('./change-calculator');

app.get('/:total', function(req, res) {
    const total = req.params.total;

    const valid = validate(total);
    if (valid != null) {
        res.statusCode = 400;
        res.send(valid);
        return;
    }

    let result = calculateChange(total);
    res.send(result);
})

function validate(total) {
    if (isNaN(total))
        return "Parameter must be a number";

    if (total <= 0)
        return "Paramter must be greater than 0";

    if (total >= 5000)
        return "Parameter must be less than 5000";

    return null;
}

module.exports.handler = serverless(app);