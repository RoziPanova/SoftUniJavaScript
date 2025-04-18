function perfectNum(num) {
  let sum = 1;
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      sum += index;
    }
  }

  if (num === sum) {
    console.log("We have a perfect number!");
  } else console.log("It's not so perfect.");
}

perfectNum(6); //	 We have a perfect number!	 1 + 2 + 3
perfectNum(28); //		 We have a perfect number!	 1 + 2 + 4 + 7 + 14
perfectNum(1236498); //		 It's not so perfect.
