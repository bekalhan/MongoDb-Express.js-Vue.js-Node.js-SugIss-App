// routes of suggestions
const routes = require('express').Router();
const Person = require('../models/DbSchemas/personSchemas');
const suggestionController =  require('../controllers/suggestionController');
// routes

routes.get('/subject/suggestion',suggestionController.getsug);
routes.post('/subject/suggestion',suggestionController.sugpost);

module.exports = routes;