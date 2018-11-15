///////////////////////
// Pre-FizzBuzz Workout
///////////////////////


// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected outputs: an array of positive integers from 1 to n

// Your job is to write an algorithm that gets you from the input to the output.





// My Solution

function preFizz(n) {
  var tab = [];
  for(var i = 1; i <= n; i++){
    tab.push(i);
  }
  return tab;
}

// Best Practices

function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}

// Clever

let preFizz = n => [...Array(n)].map((x, i) => i+1);
