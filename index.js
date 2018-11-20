'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var contents = publicPage();
  var result = {
    statusCode: 200,
    body: contents.toString(),
    event: event,
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};

function publicPage() {
  return fs.readFileSync(`public${path.sep}index.html`);
}
