function solve(start, end) {
  let sum=0;
  let output='';
  for (let i = start; i <= end; i++) {
    output += i + " ";
    sum += i;
  }
  console.log(output);
  console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0,26);
solve(50,60);