
const {fetchBreedDescription} = require('./breedFetcher');
let incomingVal = process.argv;
let breedName = incomingVal[2];
// let domainName = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});