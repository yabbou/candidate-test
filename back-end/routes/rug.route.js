const express = require('express');
const app = express();
const rugRoutes = express.Router();
let rug = require('../models/Rug');

rugRoutes.route('/').get(function (req, res) {
    find(function (err, rugs) {
        if (err) { console.log(err); }
        else { res.json(rugs); }
    });
});

rugRoutes.route('/add').post(function (req, res) {
    let rug = new Rug(req.body);
    rug.save().then(
        rug => {
            res.status(200).json({ 'rug': 'Rug added successfully' });
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

rugRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    findById(id, function (err, rug) {
        res.json(rug);
    });
});

rugRoutes.route('/delete/:id').get(function (req, res) {
    findByIdAndRemove({ _id: req.params.id }, function (err, rug) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = rugRoutes;