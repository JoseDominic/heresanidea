const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');


const app = express();

//DB config
require('dotenv').config(); //for setting environment variables on server
const uri = process.env.ATLAS_URI;//atlas uri stored in ATLAS_URI defined in .env
mongoose.connect(uri,{useNewUrlParser:true ,useUnifiedTopology: true})
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));



//EJS
app.use(expressLayouts);
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

//Express Bodyparser
app.use(express.urlencoded({extended:true}));


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));

