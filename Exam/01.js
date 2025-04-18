function solve(input) {
    const farmersCount = input.shift();
    const farmersInput = input.splice(0, farmersCount);

    const farmers = farmersInput.reduce((farmers, farmer) => {

        let [name, workArea, task] = farmer.split(' ');

        task = task.split(',');

        farmers[name] = { workArea: workArea, task: task };
        return farmers;
    }, {});

    input.forEach(entry => {
        const line = entry.split(' / ');
        const command = line.shift();

        let name = '';

        switch (command) {
            case 'Execute':
                name = line.shift();
                let [workArea, task] = line;
                if (farmers[name].workArea == workArea && farmers[name].task.includes(task)) {
                    console.log(`${name} has executed the task: ${task}!`);
                }
                else {
                    console.log(`${name} cannot execute the task: ${task}.`);
                }
                break;
            case 'Learn Task':
                    name=line.shift();
                    let newTask=line.toString();
                    if (farmers[name].task.includes(newTask)) {
                       console.log(`${name} already knows how to perform ${newTask}.`);
                    }
                    else{
                        farmers[name].task.push(newTask);
                        console.log(`${name} has learned a new task: ${newTask}.`);
                    }
                break;
            case 'Change Area':
                    name=line.shift();
                    farmers[name].workArea=line;
                    console.log(`${name} has changed their work area to: ${line}`);
                break;
            default:
                break;
        }
    });

    Object.keys(farmers).forEach(name=>{

        let output=`Farmer: ${name}, Area: ${farmers[name].workArea}, Tasks: ${farmers[name].task.sort().join(', ')}`;
        console.log(output);
    });

}

solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
]
);

// John has executed the task: watering!
// Mary cannot execute the task: feeding.
// John has learned a new task: planting.
// John has executed the task: planting!
// Mary has changed their work area to: garden
// Mary has executed the task: cleaning!
// Farmer: John, Area: garden, Tasks: planting, watering, weeding
// Farmer: Mary, Area: garden, Tasks: cleaning, feeding
