///////////////////////
// Remove String Spaces
///////////////////////


// Simple, remove the spaces from the string, then return the resultant string.




// My Solution

function noSpace(x){
  return x.replace(/\s/g, '');
}

// Best Practices

function noSpace(x){
  return x.replace(/\s/g, '');
}

// Clever

function noSpace(x){return x.split(' ').join('')}
