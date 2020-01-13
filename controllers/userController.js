const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data_test/dummy-data.json', 'utf-8'));


exports.get = (req, resp, next) => {
    console.log(resp.statusCode);
    resp.status(200).json(data);
    next();
};

exports.post = (req, resp, next) => {
    console.log(resp.statusCode);
    resp.status(201).json({
        message: 'Created'
    });
    next();
};

exports.getId = (req, resp, next) => {
    console.log(req.params);
    console.log(resp.statusCode);
    resp.status(200).json(data);
    next();
};