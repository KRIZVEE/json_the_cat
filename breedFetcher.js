const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      throw new Error(error.message);
    } else if (body.length === 2) {
      callback("cat not found",null);
    } else {
      //deserialization [ from string to object]
      const data = JSON.parse(body);//==>'[]'
      callback(null, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };
//https://api.thecataapi.com/v1/breeds/search?q=Siberian