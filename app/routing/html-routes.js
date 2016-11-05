// ============================================================================
// DEPENDENCIES
// ============================================================================
var path = require('path');

// ============================================================================
// ROUTING
// ============================================================================
module.exports = function (app) {
  // HTML GET Requests
  app.get('/friendData', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // Default to home
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
