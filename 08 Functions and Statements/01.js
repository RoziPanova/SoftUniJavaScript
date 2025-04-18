function findSmallestNumbers(num1, num2, num3) {
  return Math.min(...arguments);
}
console.log(findSmallestNumbers(2, 5, 3));
console.log(findSmallestNumbers(600, 342, 123));
console.log(findSmallestNumbers(25, 21, 4));
console.log(findSmallestNumbers(2, 2, 2));
