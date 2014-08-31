var connect = require('connect');
var url = require('url');
var qs = require('qs');
var server = connect(
  connect.bodyParser(),
  connect.router(function(app) {
    app.post('/userlogin', function(req, res) {
      var parsedUrl = qs.parse(url.parse(req.url).query);
      var name = parsedUrl.name || req.body.name;
    });
  })
);
