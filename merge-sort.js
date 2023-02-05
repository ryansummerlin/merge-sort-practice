// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  let arrCopy = arr.slice();

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arrCopy.length <= 1) {
    return arrCopy;
  }

  // Divide the array in half
  let arrA = arrCopy.slice(0, arrCopy.length / 2);
  let arrB = arrCopy.slice(arrCopy.length / 2);

  // Recursively sort the left half
  recursiveSort(arrA);
  // Recursively sort the right half
  recursiveSort(arrB);
  // Merge the halves together and return
  return merge(arrA, arrB);
}

function recursiveSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }

  const maxValue = arr[maxIndex];
  arr.splice(maxIndex, 1);

  arr = recursiveSort(arr);
  arr.push(maxValue);

  return arr;
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let pointerA = 0;
  let pointerB = 0;
  // While there are still values in each array...
  while (pointerA < arrA.length || pointerB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[pointerA] < arrB[pointerB] || pointerB === arrB.length) {
      merged.push(arrA[pointerA]);
      pointerA++;
    } else {
      merged.push(arrB[pointerB] || pointerA === arrA.length);
      pointerB++;
    }
  }
  // Return the return array
  return merged;

}

module.exports = [merge, mergeSort];
