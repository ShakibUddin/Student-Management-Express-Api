const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const controllers = require('./controllers');
//open your own account and add username,pass and db in uri then fetch it here
const uri = require('./credentials');


const app = express();
const PORT = process.env.PORT || 8080;

//call parsers before router
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//accessing student routes, this is the last thing you do
app.use('/student', routes);

app.get('/', controllers.home);
app.get('*', controllers.error);


//connecting to database

//Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log("Server is live at port: " + PORT);
    });
}).catch(e => {
    console.log(e)
})
