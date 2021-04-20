const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const messRoute = require('./routes/message');

// middleware

app.use(express.json()); 
app.use('/user', userRoute);
app.use('/message', messRoute)

// connect to db
mongoose.connect('mongodb+srv://username:username@cluster0.uuu2u.mongodb.net/firstdata?retryWrites=true&w=majority',
    { useNewUrlParser: true , useUnifiedTopology: true },
    () => console.log('connected to db'));




// listen to server

// const port = process.env.PORT || 3000;
// app.listen (port, () => console.log(`Listening on port ${port}...`));
app.listen(3000);
