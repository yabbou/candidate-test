import { express, Router } from 'express';
import { Rug, find, findById, findByIdAndRemove } from '../models/Rug';

const app = express();
const rugRoutes = Router();

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

rugRoutes.route('/').get(function (req, res) {
    find(function (err, ruges) {
        if (err) { console.log(err); }
        else { res.json(ruges); }
    });
});

rugRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    findById(id, function (err, rug) {
        res.json(rug);
    });
});

rugRoutes.route('/update/:id').post(function (req, res) {
    findById(req.params.id, function (err, next, rug) {
        if (!rug)
            return next(new Error('Could not load Document'));
        else {
            rug.person_name = req.body.person_name;
            rug.rug_name = req.body.rug_name;
            rug.rug_gst_number = req.body.rug_gst_number;

            rug.save().then(
                rug => { res.json('Update complete'); })
                .catch(err => { res.status(400).send("Unable to update the database"); });
        }
    });
});

rugRoutes.route('/delete/:id').get(function (req, res) {
    findByIdAndRemove({ _id: req.params.id }, function (err, rug) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

export default rugRoutes;