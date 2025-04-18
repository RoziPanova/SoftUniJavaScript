function solve(num)
{
    let output='';
    for(let i=1;i<=10;i++)
    {
        output+=`${num} X ${i} = ${num*i} \n`;
    }
    console.log(output);
}
// solve(5);