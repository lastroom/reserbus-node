var request = require('request');

var replaceAccent = function(string) {
    string = string.toLowerCase();
    var acents = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u'
    }
    string = string.replace(/(á|é|í|ó|ú)/gi, function(val) {
        return acents[val];
    });
    return string;
}

var Reserbus = function() {};

Reserbus.prototype.API_BASE = 'https://www.reserbus.mx/api/';

Reserbus.prototype.cities = function(callback) {
    request.get(this.API_BASE + 'cities.json?prefetch=true', function(err, request, body) {
        callback(err, JSON.parse(body));
    });
}

Reserbus.prototype.terminals = function(params, callback) {
    request.get(this.API_BASE + 'terminals.json', {
        qs: { q: replaceAccent(params['query']) }
    }, function(err, request, body) {
        callback(err, JSON.parse(body));
    });
}

Reserbus.prototype.search = function(params, callback) {
    request.get(this.API_BASE + 'search.json', {
        qs: params
    }, function(err, request, body) {
        callback(err, JSON.parse(body));
    });
};

module.exports = new Reserbus();
