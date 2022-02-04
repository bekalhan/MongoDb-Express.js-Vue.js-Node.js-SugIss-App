// routes of subjects
const routes = require('express').Router();
const Subject = require('../models/DbSchemas/subjectSchema');
const subjectController = require('../controllers/subjectController');


//routes
routes.get('/subject',subjectController.getsubject);
routes.post('/subject',subjectController.subjectpost);
routes.get('/subject/suggestion/:id',subjectController.postsugg);
routes.get('/subject/issue/:id',subjectController.postiss);


module.exports = routes;

