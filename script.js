class Wallet {
  constructor(money) {
    let _money = money;

    this.getWalletValue = () => _money;

    this.checkFundsToPlay = (bidValue) => {
      if (_money >= bidValue) return true;
      return false;
    };

    this.changeWallet = (value, type = '+') => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return (_money += value);
        } else if (type === '-') {
          return (_money -= value);
        } else {
          alert('Incorrect type of action!');
        }
      } else {
        throw new Error('Incorrect number');
      }
    };
  }
}

class Statistics {
  constructor() {
    this.results = [];
  }
  addGameToResults(bidValue, win) {
    let game = {
      bidValue,
      win,
    };

    this.results.push(game);
  }

  showGameStatistics() {
    let games = this.results.length;
    let wins = this.results.filter((result) => result.win).length;
    let losses = games - wins;

    return [games, wins, losses];
  }
}
