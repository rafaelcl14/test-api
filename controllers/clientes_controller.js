const db = require('../database/db');

exports.getClientes = (req, res, next) => {
    res.json(db);
};


exports.postClientes = (req, res, next) => {
    const body = req.body;
    console.log(body);
    if (!body) {
        return res.status(400).end();
    } else {
        db.push(body);
        return res.status(200).json(body);
    }


};