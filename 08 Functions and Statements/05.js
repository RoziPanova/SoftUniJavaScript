function palindromeIntegers(numbers)
{
    const isPalindrome=(num=>{
        const startNum=num.toString();
        const reversedNum=startNum.split('').reverse().join('');

        return startNum===reversedNum;
    });

    numbers.forEach(num => {
        console.log(isPalindrome(num));
    });
}

palindromeIntegers([32,2,232,1010]);