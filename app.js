const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const controllers = require('./controllers');
const middlewares = require('./middlewares');


const app = express();
const PORT = process.env.PORT || 8080;

//call parsers before router
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(middlewares);

//accessing student routes, this is the last thing you do
app.use('/student',routes);

app.get('/',controllers.home);
app.get('*',controllers.error);

app.listen(PORT,()=>{
    console.log("Server is live at port: "+PORT);
});