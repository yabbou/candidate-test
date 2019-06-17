import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

let Rug = new Schema({
    name: { type: String },
    id: { type: Number },
    availability: { type: String },
    price: { type: Number }
}, { collection: 'rug' });

export default model('Rug', Rug);