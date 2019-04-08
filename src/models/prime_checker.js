const PubSub = require('../helpers/pub_sub.js');
const PrimeChecker = function (){

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('number-typed', (event)=>{
    const inputtedNumber = event.detail;
    const primeVerdict = this.numberIsPrime(inputtedNumber);
    PubSub.publish('prime-number-verdict', primeVerdict);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
