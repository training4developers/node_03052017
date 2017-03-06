import Geoservices from 'geoservices';

export const geocode = address => {

    return new Promise((resolve, reject) => {

        const client = new Geoservices();
        client.geocode({ text: address }, function (err, result) {
            if (err || result.locations.length === 0) {
                reject("ERROR: " + err);
            } else {
                resolve(result);
            }          
        });

    });
};


