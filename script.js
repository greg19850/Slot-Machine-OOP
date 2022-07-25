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

class Game {
  constructor(walletStart) {
    this.stats = new Statistics();
    this.wallet = new Wallet(walletStart);
    this.colorBoards = document.querySelectorAll('.game .color');
    this.bidInput = document.getElementById('bid');
    this.moneyDisplay = document.querySelector('.account .wallet');
    this.resultDisplay = document.querySelector('.summary .result');
    this.gamesDisplay = document.querySelector('.summary .games');
    this.winsDisplay = document.querySelector('.summary .wins');
    this.lossesDisplay = document.querySelector('.summary .losses');
    document
      .querySelector('.play')
      .addEventListener('click', this.startGame.bind(this));

    this.render();
  }

  render(
    colors = ['gray', 'gray', 'gray'],
    money = this.wallet.getWalletValue(),
    gameResult = '',
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    this.colorBoards.forEach((board, i) => {
      board.style.backgroundColor = colors[i];
    });
    this.moneyDisplay.textContent = money;
    if (gameResult) {
      gameResult = `You Won ${wonMoney}!!`;
    } else if (!gameResult && gameResult !== '') {
      gameResult = `You lost ${bid}`;
    }
    this.resultDisplay.textContent = gameResult;
    this.gamesDisplay.textContent = stats[0];
    this.winsDisplay.textContent = stats[1];
    this.lossesDisplay.textContent = stats[2];
  }

  startGame() {
    if (this.bidInput.value < 1) return alert('Minimum bid of 1 required!');
  }
}

const game = new Game(200);
