function solve(array,rotations)
{
    for (let index = 0; index < rotations; index++) {
       array.push(array.shift());
    }
    console.log(array.join(" "));
}

// solve([51, 47, 32, 61, 21], 2); //32 61 21 51 47
// solve([32, 21, 61, 1], 4); //32 21 61 1
// solve([2, 4, 15, 31], 5); //4 15 31 2
