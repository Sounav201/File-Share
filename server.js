const express = require('express');
const connectDb = require('./config/db');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());

connectDb();
//Template Engine
app.set('views',path.join(__dirname, '/views'));
app.set('view engine' , 'ejs')

//Routes
app.use('/api/files' ,require('./routes/files'))
app.use('/files' , require('./routes/show'));
app.use('/files/download',require('./routes/download'));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})