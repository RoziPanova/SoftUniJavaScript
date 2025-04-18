function solve(input) {
    const list=[];
  input.forEach((line) => {
    let [name, level, items] = line.split(" / ");
    level = Number(level);
    items = items.split(", ");
    const hero = { name, level, items };
    list.push(hero);
  });
  list.sort((a,b) => a.level-b.level);
  list.forEach(hero => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  });
}
solve([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
