function solve(input) {
    let astronautCount = Number(input.shift());

    const astronautsInput = input.splice(0, astronautCount);

    const astronauts = astronautsInput.reduce((astronauts, astronaut) => {
        let [name, workArea, tasks] = astronaut.split(' ');

        tasks = tasks.split(',');

        astronauts[name] = { workArea: workArea, tasks: tasks };

        return astronauts;
    }, {});


    input.forEach(entry => {
        const line = entry.split(' / ');
        const command = line.shift();

        let name = '';

        switch (command) {
            case 'Perform':
                name = line.shift();
                let [workArea, task] = line;
                if (astronauts[name].workArea == workArea && astronauts[name].tasks.includes(task)) {
                    console.log(`${name} has successfully performed the skill: ${task}!`);
                }
                else {
                    console.log(`${name} cannot perform the skill: ${task}.`);
                }
                break;
            case 'Learn Skill':
                name = line.shift();
                let newTask = line.toString();
                if (astronauts[name].tasks.includes(newTask)) {
                    console.log(`${name} already knows the skill: ${newTask}.`);
                }
                else {
                    astronauts[name].tasks.push(newTask);
                    console.log(`${name} has learned a new skill: ${newTask}.`);
                }
                break;
            case 'Transfer':
                name = line.shift();
                astronauts[name].workArea = line;
                console.log(`${name} has been transferred to: ${line}`);
                break;
            default:
                break;
        }
    });

    Object.keys(astronauts).forEach(name => {

        let output = `Astronaut: ${name}, Section: ${astronauts[name].workArea}, Skills: ${astronauts[name].tasks.sort().join(', ')}`;
        console.log(output);
    });

}

solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
]
);

// Alice has successfully performed the skill: piloting!
// Bob cannot perform the skill: repair.
// Alice has learned a new skill: navigation.
// Alice has successfully performed the skill: navigation!
// Bob has been transferred to: command_module
// Bob has successfully performed the skill: maintenance!
// Astronaut: Alice, Section: command_module, Skills: communications, navigation, piloting
// Astronaut: Bob, Section: command_module, Skills: maintenance, repair
