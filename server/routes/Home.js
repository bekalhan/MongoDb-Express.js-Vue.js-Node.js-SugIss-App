const routes = require('express').Router();
const HomeController = require('../controllers/homeController');

routes.get('/',HomeController.index);



module.exports = routes;