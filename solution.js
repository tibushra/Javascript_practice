function matchWinner(teamAGoals, teamBGoals) {

  if (typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number') {
    return "Invalid";
  }
  else if (teamAGoals > teamBGoals) {
    return "Team A Won";
  }
  else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  }
  else if (teamAGoals === teamBGoals) {
    return "Draw";
  }

}

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

function calculateAiCost(tokensUsed) {

  let extra = 0;
  let count = 0;
  let charge = 0;
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  else if (tokensUsed <= 500) {
    charge === 0;
    return charge;
  }
  else if (tokensUsed > 500) {
    extra = tokensUsed - 500;
    count = Math.floor(extra / 100);
    charge = count * 5;
    return charge;
  }
}

function topRatedRestaurant(restaurants) {

    if (Array.isArray(restaurants) === false || restaurants.length <= 0) {
        return "Invalid";
    }
    for (let i = 0; i < restaurants.length; i++) {

        if (typeof restaurants[i] === "number" || typeof restaurants[i] === "string") {
            return "Invalid";
        }
    }
    let topRate = 0;
    let topRestaurant = "";

    for (const restaurant of restaurants) {
        if (restaurant.rating > topRate) {
            topRate = restaurant.rating;
            topRestaurant = restaurant.name;
        }
    }

    return topRestaurant.toUpperCase();
}

function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }
    for (let i = 0; i < times.length; i++) {

        if (typeof times[i] !== "number") {
            return "Invalid";
        }
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

    return total / times.length;
}