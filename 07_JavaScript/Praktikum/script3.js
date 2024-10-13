function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const numbers = [5, 3, 9, 1, 6];
const result = findLargest(numbers);
console.log(result);
