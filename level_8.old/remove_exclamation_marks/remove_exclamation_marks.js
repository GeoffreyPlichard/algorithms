//////////////////////////////
// Remove exclamation marks
//////////////////////////////


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



// My Solution

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

// Best Practices

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

// Clever

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
