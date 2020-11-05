//node breedFetcher.js Chartreux
const request = require('request');
let incomingVal = process.argv;
let breedName = incomingVal[2];
// console.log('breedName:',breedName);
let domainName = `https://api.thecataapi.com/v1/breeds/search?q=${breedName}`;
request(domainName, (error, response, body) => {
  if (error) {
    console.log('🔴Ohh No🔴 There seems to be somehting not working : \n', error);
  } else if (body.length === 2) {
    console.log(`Hey, entered breed name "${breedName}" is not found`);
  } else {
    //deserialization [ from string to object]
    const data = JSON.parse(body);//==>'[]'
    console.log('data : ', data, body);
    // console.log(typeof data);
    // console.log(`Description for breed "${breedName}" is : `,data[0].description);
  }
});