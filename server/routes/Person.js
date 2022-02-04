//  routes of persons
const routes = require('express').Router();
const Person = require('../models/DbSchemas/personSchemas');
const personController = require('../controllers/personController');
//routes

routes.get('/persons',personController.getpersons);
routes.get('/persons/:id',personController.persondetail);
routes.post('/persons',personController.personpost);

//new
// routes.get('/person/suggestion',personController.personsugg);

module.exports = routes;