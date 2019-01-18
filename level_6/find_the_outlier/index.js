///////////////////
// FIND THE OUTLIER
///////////////////

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Example

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


// TRICK
// Use the modulo 2 to find pairs


// MINE

function findOutlier(n){
    let even = [];
    let odd = [];
    for(let i = 0; i < n.length; i++) {
        n[i] % 2 === 0 ? even.push(n[i]) : odd.push(n[i]);
    }
    return even.length === 1 ? even[0] : odd[0];
}

// BEST

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
// }
// CLEVER

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
// }


// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

module.exports = findOutlier;
