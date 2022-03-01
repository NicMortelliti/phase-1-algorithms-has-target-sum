function hasTargetSum(array, target) {
  console.log(array, target);

  /*
  Initialize result to false.
  If the there are no numbers in the array that
  add up the equal the target number, this
  default of false will be returned.
  */
  let result = false;

  /*
  Iterate through the array with two variables (i and j).
  'i' will point to a single number of the array while
  'j' jumps through the remaining numbers in the array.
  'j' will never point at an index less than 'i' because
  that combination of numbers would have already been checked.
  Set 'result' to true when a combination that meets the
  requirements is found.
   */
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result = true;
      }
    }
  }

  return result;
}

/* 
  Write the Big O time complexity of your function here

  - 1 -> intToFind variable is set
  - n -> Array is being searched

  = O(1n) --> Remove constant of 1 --> O(n) Linear?
*/

/* 
  Add your pseudocode here
  
  let result = false

  for (let i = 0, i <= array.length, i++){
    for (let j = i+1, j <= array.length - j, j++){
      if (array[i] + array[j] === target){
        result = true;
      }
    }
  }

  return result;
}

*/

/*
  Add written explanation of your solution here

  Write a function (hasTargetSum) that takes in 2 arguments:
    - an array of integers
    - a single integer

  The function will step through the array adding it's various integers together.
  Once the sum of a pair of numbers from the array matches the single integer that was passed in, return true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("=>", hasTargetSum([1, 2, 3], 200));
  console.log("=>", hasTargetSum([2], 4));
}

module.exports = hasTargetSum;
