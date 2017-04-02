var express, pictureController, router;
require('dotenv').config();
express = require('express');
router = express.Router();
// mongoCollectionController = require('./controllers/mongoCollection');

module.exports = function(app) {
    return app.get('/*', function(req, res) {
        return res.sendFile((process.cwd()) + "/views/index.html");
    });
  // return app.get('/random', mongoCollectionController.listAll);
};