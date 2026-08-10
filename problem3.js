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
