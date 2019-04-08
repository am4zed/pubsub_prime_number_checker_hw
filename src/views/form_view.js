const PubSub = require('../helpers/pub_sub.js');
const FormView = function(){

};

FormView.prototype.clearForm = function(){
  const form = document.querySelector('#prime-checker-form');
  form.reset()};

FormView.prototype.bindEvents = function(){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('number-typed', inputtedNumber);
  });

  PubSub.subscribe('prime-number-verdict', this.clearForm());
};


module.exports = FormView;
