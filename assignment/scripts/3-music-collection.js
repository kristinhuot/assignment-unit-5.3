console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; 
// added blank array 

//created a new object that holds the album's `title`, `artist`, `yearPublished` as parameters

function addToCollection (collection, title, artist, yearPublished){
  let newAlbum = {
    title: title, 
    artist: artist, 
    yearPublished: yearPublished
  }
  collection.push(newAlbum)
  return newAlbum
}
//function to create a new object, and add to the myCollection array

console.log('Testing function and adding first album:', (addToCollection(myCollection, "Heard It In a Past Life", 'Maggie Rogers', '2019')));
//tested function and added first album

console.log('Adding album 2:', (addToCollection(myCollection, 'Stick Seasons', 'Noah Kahan', '2022')));
//added second album 

console.log('Adding album 3:', (addToCollection(myCollection, 'Seven + Mary', 'Rainbow Kitten Surprise', '2013')));
//added third album

console.log('Adding album 4:', (addToCollection(myCollection, 'Goodpain', 'Yoke Lore', '2017')));
//added fourth album

console.log('Adding album 5:', (addToCollection(myCollection, 'For Emma, Forever Ago', 'Bon Iver', '2008')));
//added fifth album

console.log('Adding album 6:', (addToCollection(myCollection, 'Is It?', 'Ben Howard', '2023')));
//added sixth album

console.log('This is now myCollection:', myCollection);

function showCollection (collection) {
  for(let eachAlbum of collection){
    console.log(`${eachAlbum.title} by ${eachAlbum.artist}, published in ${eachAlbum.yearPublished}`);
   }
}
// created function to run through myCollection and print the side effects in a one lined string
showCollection(myCollection); 
// tested myCollection function 

function findByArtist (collection, artist){
  let matchingArtists= []; // created blank array
  for (let eachAlbum of collection){ //set up a for loop, that checks the index(album object) of the collection (myCollection array)
    if (eachAlbum.artist === artist) {
      matchingArtists.push(eachAlbum);
    }
  }
  return matchingArtists;
}
console.log('Looking for Maggie Rogers:', findByArtist(myCollection, 'Maggie Rogers')); //testing an artist within the array
console.log('Looking for Beyonce', findByArtist(myCollection, 'Beyonce')); //testing an artist not in the array 

/////////////////////////////////////////////////////////

//Pseudo code for 5.3 stretch 

// 1. Create a function titled 'search'
// 2. It should take in a 'collection' and 'searchCriteria' parameter
// 3. The searchCriteria parameter should be a search object that has the artist and yearPublished properties 
// 4. Loop the collection and looks for a match with the searchCriteria object that we are putting in there 
// 5. Create a new array
// 6. Let the matching objects return to this new array 
// 6. If no results are found, return an empty array 
// 8. Return all albums from the collection being searched if the specific artist and yearPublished don't have matches 


let searchObject = {artist: 'Maggie Rogers', yearPublished: 2019} //defined a variable to input for the searchCriteria. Could have also put {artist: 'Maggie Rogers', yearPublished: 2019} directly into the searchCriteria place when calling the function 
 
function search(collection, searchCriteria){ //created search function that has two parameters, the collection and the search criteria we're looking for. The search criteria will be an object 
  if (searchCriteria === undefined || !searchCriteria.artist || searchCriteria.yearPublished === undefined){
    return collection; // checking to see if any of our edge cases exist (ie if searchCriteria is missing, if the artist or yearPublished properties). If they don't, then the function will run 
  }
  let matchingAlbums = []; // creates an empty array
  for (let result of collection){ // set up for loop to check if the artist and yearPublished properties of our inputted object match with our objects in the collection array 
    if (result.artist === searchCriteria.artist && result.yearPublished === searchCriteria.yearPublished){
      matchingAlbums.push(result)
    }
  }
  return matchingAlbums; // will return empty array if the parameters aren't met, otherwise will push the matching object to the new array and return this new array 
}

console.log('Testing for Maggie Rogers, expecting to see 1 matching item in the array:', search(myCollection, searchObject));
console.log('Testing for an artist not within my array. Should return an empty array:', search(myCollection, {artist: 'Hozier', yearPublished: 2024}));
console.log('Testing for no search object. Should return the full array aka all albums:', search(myCollection));
console.log('Testing for a missing artist. Should return the full array aka all albums:', search(myCollection, {yearPublished: 1990}));
console.log('Testing for a missing yearPublished. Should return the full array aka all albums:', search(myCollection, {artist: 'Usher'}));
console.log('Testing a blank artist string:', search(myCollection, {artist:'', yearPublished: 2019}));

try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
