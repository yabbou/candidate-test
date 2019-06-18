const express = require('express');
const app = express();
const rugRoutes = express.Router();
let rug = require('../models/Rug');

//list
rugRoutes.route('/').get(function (req, res) {
    find(function (err, rugs) {
        if (err) { console.log(err); }
        else { res.json(rugs); }
    });
});

//details
rugRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    findById(id, function (err, rug) {
        res.json(rug);
    });
});

//add
rugRoutes.route('/0/edit').post(function (req, res) {
    let rug = new Rug(req.body);
    rug.save().then(
        () => { res.status(200).json({ 'rug': 'Rug added successfully' }); })
        .catch(err => { res.status(400).send("Unable to save to database"); });
});

//delete
rugRoutes.route('/:id/delete').get(function (req, res) {
    findByIdAndRemove({ _id: req.params.id }, function (err, rug) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = rugRoutes;