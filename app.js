const express = require(`express`);
const path = require(`path`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);
const passport = require(`passport`);
const mongoose = require(`mongoose`);
const databaseConfig = require(`./config/database`);

/*
// connecting database
mongoose.connect(databaseConfig.database);

// on connection
mongoose.connection.on(`connected`, () => {
    console.log(`Connected to database ` + databaseConfig.database)
})

// on error
mongoose.connection.on(`error`, (err) => {
    console.log(`Database Error ` + err)
})
*/

// App initialization
const app = express();

// Users router
const usersRouter = require(`./routes/usersRouter`);

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, `public`)));

// Body-Parser Middleware
app.use(bodyParser.json());

// Users Route
app.use(`/users`, usersRouter);

// Index Route
app.get('/', (req, res) => {
    res.send(`Hello MEAN Stack!!!`);
});

// Start Server
app.listen(port, () => {
    console.log(`Yeyyy server is running on port: ` + port);
});