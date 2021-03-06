Reserbus node.js wrapper
====

## Install

```
npm install reserbus-node
```

## Usage

> Reserbus, service that sell buses around México

### reserbus.terminals

> Search for terminals

```javascript
var reserbus = require('reserbus');

reserbus.terminals({
    query: 'México'
});
```

### reserbus.cities

> Search for cities

```javascript
var reserbus = require('reserbus');

reserbus.cities({prefetch: true}, function(err, result) {
    console.log(err, result);
});
```

### reserbus.search

> Search for buses

**Arguments**

* trips (Array):
 
 arrivalDate (String) [format: 'dd/mm/yyyy']
 
 origin (String)
 
 destination (String)

```javascript
var reserbus = require('reserbus');

reserbus.search({
    trips: [{
        arrivalDate: '03/03/2014',
        origin: 'ciudad-de-mexico',
        destination: 'monterrey'
    }]
}, function(err, results) {
    console.log(results.trips[0].departures);
});
```
