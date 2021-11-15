const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session')

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(session({
    secret: "Shh, It's a secret",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

//Apis
const usersApiRoutes = require("./routes/api/userApiRoutes")
const gamesApiRoutes = require("./routes/api/gamesApiRoutes")

app.use('/', mainRoutes);
app.use('/user', userRoutes);

app.use("/api/users", usersApiRoutes);
app.use("/api/games", usersApiRoutes);

app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000');
});