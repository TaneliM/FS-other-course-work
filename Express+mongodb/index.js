const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const Users = require("./models/Users");

const logger = require('./middleware/logger');

const app = express();

// Use MongoDB
const mongoDB = "mongodb://localhost:27017/testdb1";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Can't connect to MongoDB"));

// Middleware
app.use(logger);

// Handlebars
app.engine('handlebars', exphbs.engine({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    Users.find({}).lean().exec((err, data) => {
        if (err) throw err;
        res.render('index', {
            title: 'Home',
            users: data
        });
    });
});

// using a static folder
/*app.use(express.static(path.join(__dirname, 'public')));*/

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));