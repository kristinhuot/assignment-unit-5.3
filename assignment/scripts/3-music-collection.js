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
console.log('Looking for Maggie Rogers:', findByArtist(myCollection, 'Maggie Rogers'));
console.log('Looking for Beyonce', findByArtist(myCollection, 'Beyonce'));



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
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
