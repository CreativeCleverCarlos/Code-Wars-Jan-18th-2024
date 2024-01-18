/**
 As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
**/

//an array is going to be given

//the array will only have numbers. 
//the numbers can be positive, negative, or decimals
//only 3 numbers will be given in the array


function gimme(triplet){
    //i know ill need to loop through the array
    
    //only 3 numbers will be in the array
}

gimme([5,3,1])

//the solution

function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }