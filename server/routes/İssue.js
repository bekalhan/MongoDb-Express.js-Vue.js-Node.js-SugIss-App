// routes of issues

const routes = require('express').Router();
const issueController = require('../controllers/issueController');

routes.get('/subject/issue',issueController.getiss);
routes.post('/subject/issue',issueController.isspost);



module.exports = routes;
