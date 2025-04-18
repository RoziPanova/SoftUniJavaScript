function vacation(count, type, day) {
  const sFriday = 8.45;
  const sSaturday = 9.8;
  const sSunday = 10.46;

  const bFriday = 10.9;
  const bSaturday = 15.6;
  const bSunday = 16;

  const rFriday = 15;
  const rSaturday = 20;
  const rSunday = 22.5;
  let price;

  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = count * sFriday;
          break;
        case "Saturday":
          price = count * sSaturday;
          break;
        case "Sunday":
          price = count * sSunday;
          break;
      }
      if (count >= 30) price -= price * 0.15;
      break;
      case "Business":
      if (count >= 100) count -= 10;
      switch (day) {
        case "Friday":
          price = count * bFriday;
          break;
        case "Saturday":
          price = count * bSaturday;
          break;
        case "Sunday":
          price = count * bSunday;
          break;
      }

      break;
    case "Regular":
      switch (day) {
        case "Friday":
          price = count * rFriday;
          break;
        case "Saturday":
          price = count * rSaturday;
          break;
        case "Sunday":
          price = count * rSunday;
          break;
      }
      if (count>=10 && count<=20) price*= 0.95;
      break;
  }

  console.log("Total price:", price.toFixed(2));
}
vacation(30,"Students","Saturday");