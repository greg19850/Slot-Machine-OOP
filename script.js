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

class Draw {
  constructor() {
    this.options = ['red', 'green', 'blue'];
    let _drawResult = this.drawResult();
    this.GetDrawResult = () => _drawResult;
  }

  drawResult() {
    let colors = [];
    for (let i = 0; i < this.options.length; i++) {
      let index = Math.floor(Math.random() * this.options.length);
      colors.push(this.options[index]);
    }
    return colors;
  }
}

class Result {
  static moneyWon(result, bidValue) {
    if (result) return 3 * bidValue;
    else return 0;
  }

  static checkResult(draw) {
    if (
      (draw[0] === draw[1] && draw[1] === draw[2]) ||
      (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
    ) {
      return true;
    } else return false;
  }
}
