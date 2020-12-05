
const {fetchBreedDescription} = require('./breedFetcher');
let incomingVal = process.argv;
// console.log('incoming Value is : ',incomingVal); [nodePath, filePath, argument1]
let breedName = incomingVal[2];
// let domainName = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error in fetching details:', error);
  } else {
    console.log(desc);
  }
});