////////////////////
// THE MEXICAN WAVE
////////////////////



// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// EXAMPLE

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]




// MY SOLUTION

function wave(word){
  let result = [];
  for(let i = 0; i < word.length; i++) {
    let newWord = word.split('').map((value, index) => {
      return index === i ? value.toUpperCase() : value;
    }).join('');
    // Don't push the empty sit word
    if(/[A-Z]/.test(newWord)) {
      result.push(newWord);
    }
  }
  return result;
}

// BEST

function wave(str){
  let result = [];
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  return result;
}

// CLEVER

const wave = s => Array.from( s, (_,i) => /\s/.test(s[i]) ? null : s.slice(0,i) + s[i].toUpperCase() + s.slice(i+1) ).filter(Boolean) ;

