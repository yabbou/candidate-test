const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rug = new Schema({
    name: String,
    id: Number,
    availability: String,
    price: Number,
    imageUrl: String
}, { collection: 'rugs' });

module.exports = mongoose.model('Rug', Rug);