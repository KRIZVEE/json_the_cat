//node breedFetcher.js Chartreux
const request = require('request');
// console.log('breedName:',breedName);
const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      // console.log('🔴Ohh No🔴 There seems to be something not working : \n', error);
      callback(error,null);
    } else if (body.length === 2) {
      // console.log(`Hey, entered breed name "${breedName}" is not found`);
      callback(error,null);
    } else {
      //deserialization [ from string to object]
      const data = JSON.parse(body);//==>'[]'
      // console.log('Description : ', data[0].description);
      callback(null, data[0].description);
      // console.log(typeof data);
      // console.log(`Description for breed "${breedName}" is : `,data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };
//https://api.thecataapi.com/v1/breeds/search?q=Siberian