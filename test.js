var reserbus = require('./reserbus.js');

reserbus.cities(function(err, result) {
    console.log(result);
});

reserbus.terminals({query: 'Ciudad de México'}, function(err, result) {
    console.log(result);
});

buses.search({
    trips: [
        {
            origin: 'ciudad-de-mexico',
            destination: 'monterrey',
            arrivalDate: '30/04/2014'
        },
        {
            origin: 'monterrey',
            destination: 'ciudad-de-mexico',
            arrivalDate: '30/04/2014'
        }
    ]
}, function(err, results) {
    console.log(results);
});