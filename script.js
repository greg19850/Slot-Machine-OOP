class Wallet {
  constructor(money) {
    let _money = money;

    this.getWalletValue = () => _money;

    this.checkFundsToPlay = (bidValue) => {
      if (_money >= bidValue) return true;
      return false;
    };
  }
}
