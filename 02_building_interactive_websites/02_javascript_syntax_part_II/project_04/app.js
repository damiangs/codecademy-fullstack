const team = {
  _players: [
    { firstName: "Daniel", lastName: "Ortigoza", age: 29 },
    { firstName: "Isai", lastName: "Machuca", age: 29 },
    { firstName: "Peto", lastName: "Arjona", age: 29 },
  ],
  _games: [
    { opponent: "FNTIC", teamPoints: 100, opponentPoints: 300 },
    { opponent: "Telecom", teamPoints: 200, opponentPoints: 400 },
    { opponent: "Heretics", teamPoints: 300, opponentPoints: 500 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };

    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

console.log(team._players);
console.log(team._games);
