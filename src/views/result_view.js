const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('prime-number-verdict', (event)=>{
    const primeVerdict = event.detail;
    this.displayResult(primeVerdict);
  });
};

ResultView.prototype.displayResult = function(primeVerdict){
  const resultElement = document.querySelector('#result');
  if (primeVerdict === true)
    {resultElement.textContent = 'Yes! It\'s a Prime Number!'}
  else {resultElement.textContent = 'Nope! It\'s not a Prime Number!'};
};

module.exports = ResultView;
