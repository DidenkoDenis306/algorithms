const array = [0, 0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 8, 8];

let iterationCount = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let position = -1;

  while (start <= end) {
    iterationCount++;

    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      return middle;
    }

    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return position;
}

console.log("Index of element: ", binarySearch(array, 80));
console.log("Iterations: ", iterationCount);
