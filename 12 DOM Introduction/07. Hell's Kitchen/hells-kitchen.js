function solve() {
  const input = document.querySelector("#inputs textarea").value;

  const outputbestRestaurantEl = document.querySelector("#outputs #bestRestaurant p");
  const outputWorkersEl = document.querySelector("#outputs #workers p");

  if (!input) {
    return;
  }

  const restaurants = JSON.parse(input)
  .reduce((acc, entry) => {
    const [name, workerData] = entry.split(" - ");

    const workers = workerData.split(", ")
    .map((workerData) => {
      const [name, salary] = workerData.split(" ");

      return { name, salary: Number(salary) };
    });

    acc[name] ??= { workers: [] };
    acc[name].workers.push(...workers);

    return acc;
  }, {});

  
  function getAvgSalary(restoarantData) {
    const allSalaries = restoarantData.workers
    .reduce((allSalaries, w) => allSalaries + w.salary, 0);
    return allSalaries / restoarantData.workers.length; 
}

const [ bestRestorantKey ] = Object.keys(restaurants)
    .sort((a, b) => getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a]));

const bestWorkers = restaurants[bestRestorantKey].workers
    .toSorted((a, b) => b.salary - a.salary);

    outputbestRestaurantEl.textContent = `Name: ${bestRestorantKey} `;
    outputbestRestaurantEl.textContent += `Average Salary: ${getAvgSalary(restaurants[bestRestorantKey]).toFixed(2)} `
    outputbestRestaurantEl.textContent += `Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;

outputWorkersEl.textContent = bestWorkers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
}
