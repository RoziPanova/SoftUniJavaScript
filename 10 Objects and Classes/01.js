function solve(input) {
  const newObj = {};

  input.forEach((element) => {
    newObj[element] = element.length;
  });

  for (const name in newObj) {
    console.log(`Name: ${name} -- Personal Number: ${newObj[name]}`);
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
