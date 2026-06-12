const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const session = require('express-session');

const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));


app.use(session({
  secret: process.env.SECRET,
  resave: true, 
  saveUninitialized: true, 
  cookie: {
    secure: false,
    maxAge: (1000*60*60)
  }
}))

app.use(router);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
