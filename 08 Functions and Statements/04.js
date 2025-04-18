function oddEvenSum(number)
{
    const digits=Math.abs(number).toString().split("").map(Number);

    const evenSum=digits.filter(d=>d%2===0).reduce((sum,d)=>sum+d,0);

    const oddSum=digits.filter(d=>d%2!==0).reduce((sum,d)=>sum+d,0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(1000435);