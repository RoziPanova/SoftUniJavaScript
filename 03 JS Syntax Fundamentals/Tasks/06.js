function solve(number) {
  const stringFromNum = number.toString();
  let sum = 0;
  for (let i = 0; i < stringFromNum.length; i++) {
    sum += Number(stringFromNum[i]);
  }
  console.log(sum);
}
// solve(245678);
