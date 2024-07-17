const array = [6, 4, 3, 1, 7, 8, 4, 4, 3, 9];

let iterationCount = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }

      iterationCount++;
    }

    [array[i], array[indexMin]] = [array[indexMin], array[i]];
  }

  return array;
}

console.log("Sort array", selectionSort(array));
console.log("Iterations: ", iterationCount);
