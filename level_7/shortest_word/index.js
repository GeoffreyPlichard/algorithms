//////////////////
// Shortest Word
//////////////////


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



// My Solution

function findShort(s){
  var arr=s.split(" ")
  var shortest=arr[0].length
  for(var i=0 ; i<arr.length; i++){
      if(arr[i].length < shortest){  
        shortest=arr[i].length
      }
    }
  return shortest
}

// Best Practices

// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

// Clever

// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

module.exports = findShort;