fs = require('fs');
var parser = require('xml2json');

fs.readFile( './auth.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log(json);
 });