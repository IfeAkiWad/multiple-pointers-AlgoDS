/*Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. */


function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
      
      //  check to see if there is anything in the array
      // create a counter and set at 0
      let counter = 0
      let left = 0
      let right = arr.length - 1
      //  loop through array from both sides to count unique values
      while( left < right) {
          if (arr[left] !== arr[right]) {
              counter += 1
          } else if (arr[left] === arr[right]){
              right--
          } else{
              left++
          }
      }
      console.log(counter)
  }