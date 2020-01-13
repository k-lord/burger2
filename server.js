// Dependencies
var express = require( "express" );

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring Models for syncing
var db = require("./models");

// Set up Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Sync DB and start app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });