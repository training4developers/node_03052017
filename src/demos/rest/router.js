import bodyParser from 'body-parser';
import express from 'express';
import { readData, writeData, getNextId, findById } from './db';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        readData().then(data => res.json(data));
    })
    .post(bodyParser.json(), (req, res) => {
        readData().then(data => {
            req.body.id = getNextId(data);
            data.push(req.body);
            writeData(data).then(() => {
                res.json(req.body);
            });
        });
    });

router.route('/:id')
    .get((req, res) => {
        readData().then(data =>
            res.json(findById(data, req.params.id)));
    })
    .put(bodyParser.json(), (req, res) => {

        readData().then(data => {
            const oldItem = findById(data, req.params.id);
            req.body.id = Number(req.params.id);
            data.splice(data.indexOf(oldItem), 1, req.body);
            writeData(data).then(() => res.json(oldItem));
        });

    })
    .delete((req, res) => {
        readData().then(data => {
            const item = findById(data, req.params.id);
            writeData(data.filter(item =>
                item.id !== Number(req.params.id))).then(() =>
                    res.json(item));
        });
    });

export default router;
    