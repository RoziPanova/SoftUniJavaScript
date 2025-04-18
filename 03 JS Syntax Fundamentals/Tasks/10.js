function solve(num) {
  const stringFromNum = num.toString();
  let sum = 0;
  let check = true;
  for (let i = 0; i < stringFromNum.length; i++) {
    if (
      stringFromNum[i] !== stringFromNum[i + 1] &&
      i < stringFromNum.length - 1
    ) {
      check = false;
    }
    sum += Number(stringFromNum[i]);
  }
  console.log(`${check}\n${sum}`);
}
// solve(1234);
