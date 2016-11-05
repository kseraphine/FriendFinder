// ============================================================================
// DEPENDENCIES
// List of nom packages used
// ============================================================================

var express = require('express');
var body-parser = require('body-parser');
var path = require('path');

// ============================================================================
// EXPRESS
// Setting up the express server
// ============================================================================

var app = express();
var PORT = process.env.PORT || 8080;

// Using BodyParser to interpret the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ============================================================================
// ROUTES
// ============================================================================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// ============================================================================
// Start the server
// ============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
