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




