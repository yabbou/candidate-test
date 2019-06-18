const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rug = new Schema({
    name: { type: String },
    id: { type: Number },
    availability: { type: String },
    price: { type: Number }
}, { collection: 'rug' });

module.exports = mongoose.model('Rug', Rug);