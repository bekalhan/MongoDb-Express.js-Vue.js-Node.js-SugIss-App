const { urlencoded } = require('express');
const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
// import the database
require('./server/models/mongodb');

app.set('view engine','pug');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
//routes

const routesindex = require('./server/routes/Home');
const routesperson = require('./server/routes/Person');
const routessubject = require('./server/routes/Subject');
const routessuggestion = require('./server/routes/Suggestion');
const routesissue = require('./server/routes/İssue');


// started server
app.set('port', process.env.PORT || 3000);



app.listen(app.get('port'), ()=>{
    console.log('Server on port ' + app.get('port'));
});



// to include somethings in the project
app.use(urlencoded({extended : true}));


//middleware
app.use('/',routesindex);
app.use('/',routesperson);
app.use('/',routessubject);
app.use('/',routessuggestion);
app.use('/',routesissue);