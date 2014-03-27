var request = require('request');

var Reserbus = function() {};

Reserbus.prototype.API_BASE = 'https://www.reserbus.mx/api/';

Reserbus.prototype.search = function(params, callback) {
    request.get(this.API_BASE + 'search.json', {
        qs: params
    }, function(err, request, body) {
        callback(err, body);
    });
};

module.exports = new Reserbus();