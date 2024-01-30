const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors')
const session = require('express-session');
const Users = require('./Schema.js')
var sessionstore = require('sessionstore');


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret : "Zenmonk",
    cookie : {maxAge: 24*60*60*1000},
    saveUninitialized : false,
    store: sessionstore.createSessionStore()

}))


mongoose.connect("mongodb+srv://navdishjaggi:Navdish2001@cluster0.m2bproi.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("DB connected"))
    .catch((error) => console.log(error));

app.post('/signup',async function(req, res){
    const {name, email, password} = req.body;
    const user = await Users.findOne({email}).exec();

    if(user)
    {
        return res.status(400).json({message :'something went wrong'});
    }
    else 
    {
        const new_user = await Users.create({name, email, password});
        res.status(200);
    }

})

app.post('/login',async function(req, res){
    const {email, password} = req.body;
    
    console.log(req.sessionID);
    const user = await Users.findOne({email: email}).exec();
    console.log(user);
    if(user )
    {
        if( req.session.authenticated)
        {
            return res.status(200);
        }
        else if( password === user.password){
            req.session.authenticated = true;
            req.session.user = {email};
            return res.status(200).json(req.session);
        }
        
    }
    return res.status(403).json({message :'No user found with such credentials'});

})




app.listen(8080, function() {
  console.log("Server is running on 8080");
});



//Username - navdishjaggi, Password - Navdish2001

