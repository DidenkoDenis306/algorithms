const array = [1, 4, 6, 7, 8, 1, 4, 8, 10, 20, 6, 3, 2];

let iterationCount = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    iterationCount++;

    if (array[i] === item) {
      return i;
    }
  }

  return null;
}

console.log("Index of element: ", linearSearch(array, 8));
console.log("Iterations: ", iterationCount);
