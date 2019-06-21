const express = require('express');
const app = express();
const rugRoutes = express.Router();

let Rug = require('../models/Rug');

//get (list)
rugRoutes.route('/').get(function (req, res) {
    Rug.find(function (err, rugs) {
        if (err) { console.log(err); }
        else { res.json(rugs); }
    });
});

//get (details)
rugRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Rug.findById(id, function (err, rug) {
        if (err) { return res.json(err); }
        else { res.json(rug); }
    });
});

//add
rugRoutes.route('/add').post(function (req, res) {
    let rug = new Rug(req.body);
    rug.save().then(
        req => { res.status(200).json({ 'rug': 'Rug added successfully' }); })
        .catch(() => { res.status(400).json("Unable to add to database"); });
});

//delete
rugRoutes.route('/:id/delete').get(function (req, res) {
    Rug.findByIdAndDelete(req.params.id, function (err) {
        if (err) { return res.json(err); }
        else { res.json('Successfully deleted'); }
    });
});

module.exports = rugRoutes;