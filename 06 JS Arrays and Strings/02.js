function solve(array, step) {
  return array.filter(function (el, index) {
    return index % step === 0;
  });
}

console.log(solve(["5", "20", "31", "4", "20"], 2)); //['5', '31', '20']
console.log(solve(["dsa", "asd", "test", "tset"], 2)); //['dsa', 'test']
console.log(solve(["1", "2", "3", "4", "5"], 6)); // ['1']
