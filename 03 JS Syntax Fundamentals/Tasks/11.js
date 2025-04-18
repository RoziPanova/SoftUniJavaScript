function solve(speed, area) {
  function processStatus(speed, speedLimit) {
    if (speed > speedLimit) {
      const difference = speed - speedLimit;
      let status;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  }
  switch (area) {
    case "motorway":
      processStatus(speed, 130);
      break;
    case "interstate":
      processStatus(speed, 90);
      break;
    case "city":
      processStatus(speed, 50);
      break;
    case "residential":
      processStatus(speed, 20);
      break;
  }
}
// solve(21, 'residential');
