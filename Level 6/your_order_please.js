/////////////////////
// Your order, please
/////////////////////

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.


// EXAMPLES

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// MY SOLUTION

function order(words){
  let words_array = words.split(' ');
  let result = Array.from(words_array);
  words_array.map((word, index) => {
    for(let i = 0; i < word.length; i++) {
      if( /\d/.test(word[i]) ) {
        result[word[i] - 1] = word;
      }
    }
  });
  return result.join(' ');
}

// BEST

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  

// CLEVER

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  
