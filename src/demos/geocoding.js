var Geoservices = require('geoservices');
var client = new Geoservices();

client.geocode({ text: "Richmond, VA" }, function (err, result) {
    if (err) {
        console.error("ERROR: " + err);
    } else {
        console.log(result.locations[0]);
        //console.log("Found it at " + result.locations[0].feature.geometry.y
        //    + ", " + result.locations[0].feature.geometry.x);
    }
});