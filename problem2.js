function isElevatorSafe(weights) {

  let weightSum = 0;
  for (let i = 0; i < weights.length; i++) {

    if (typeof weights[i] !== "number") {
      return "Invalid";
    }
    weightSum += weights[i];
  }

  if (Array.isArray(weights) === false) {
    return "Invalid";
  }

  else if (weightSum <= 400) {
    return true;
  }
  else if (weightSum > 400) {
    return false;
  }
}
