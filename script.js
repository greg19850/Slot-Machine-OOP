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
