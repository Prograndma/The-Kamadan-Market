"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  return res.send('Received a GET HTTP method');
});
app.post('/', function (req, res) {
  return res.send('Received a POST HTTP method');
});
app.put('/', function (req, res) {
  return res.send('Received a PUT HTTP method');
});
app["delete"]('/', function (req, res) {
  return res.send('Received a DELETE HTTP method');
});
app.listen(8080, function () {
  return console.log("Example app listening on port 8080!");
});