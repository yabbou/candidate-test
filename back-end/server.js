import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Promise, connect } from 'mongoose';
import { DB } from './database';

Promise = global.Promise;
connect(DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

const server = app.listen(function () {
    console.log('Listening on port ' + port);
});