const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const calculateAverage = (value) => {
  let sum = 0;
  let arrLength = numbers.length;
  for (let i = 0; i < arrLength; i++) {
    sum = sum + numbers[i];

    average = sum / arrLength;
    document.getElementById("output").innerHTML = average;
  }
};
calculateAverage(numbers);
