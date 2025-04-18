function solve(input) {
  const dict = {};

  input.forEach((entry) => {
    const [term, description] = entry
      .replaceAll(/[{}"]/gm, "")
      .split(":");
    dict[term] = description;
  });

  Object.entries(dict)
    .sort()
    .forEach(([term, description]) =>
      console.log(`Term: ${term} => Definition: ${description}`)
    );
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrumentfor converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
