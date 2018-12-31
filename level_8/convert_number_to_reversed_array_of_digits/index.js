/////////////////////////////////////////////
// Convert number to reversed array of digits
/////////////////////////////////////////////


// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// EXEMPLE:


// 348597 => [7,9,5,8,4,3]



// My Solution

function digitize(n) {
  return n.toString().split("").reverse().map(x=>parseInt(x));
}

// Best Practices

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// Clever

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
