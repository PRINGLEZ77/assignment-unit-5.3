console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection = []

function addToCollection( collection, title, artist, yearPublished){
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(record);
  return record;
}

console.log(addToCollection(myCollection, "Cole World: The Sideline Story", "J Cole", 2011));
console.log(addToCollection(myCollection, "Born Sinner", "J Cole", 2013));
console.log(addToCollection(myCollection, "2014 Forest Hills Drive", "J Cole", 2014));
console.log(addToCollection(myCollection, "4 Your Eyez Only", "J Cole", 2016));
console.log(addToCollection(myCollection, "KOD", "J Cole", 2018));
console.log(addToCollection(myCollection, "The Off-Season", "J Cole", 2021));

console.log(myCollection);












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
