import bodyParser from 'body-parser';
import express from 'express';

import { geocode } from './geo';

const router = express.Router();

// collection url
// http://localhost:8080/api/widgets

// GET - returns all of the widget
// POST - adds a widget

// item url
// http://localhost:8080/api/widgets/:widgetId

// GET - get a single widget
// PUT - replace/update a widget
// DELETE - delete a widget




router.route('/:id')
    .delete()
    .put()
    .get()
    //.post(bodyParser.json(), (req, res) => {

        Number(req.params.id)

        geocode(req.body.address)
            .then(results => res.json(results));

    });

router.route('/')
    .get()
    .post(bodyParser.json(), (req, res) => {

        Promise.all( req.body.addresses.map(address => geocode(address)) )
            .then(results => res.json(results));

    });    

export default router;