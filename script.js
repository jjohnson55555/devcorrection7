var greeting = '[not intitialized]';
var name = '[not intitialized]';
var message = '[not initialized]';
var welcome = '[not intitalized]';

var tiles = '[not initialized]';
var subTotal = '[not initialized]';
var shipping = '[not initialized]';
var grandTotal = '[not initialized]';

function initVars() {
  greeting = 'Howdy ';
  name = 'Nathan';
  message = ', please check your order:';
  welcome = greeting + name + message;
  sign = 'Montague House';
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function setTextContentById(getId, setText) {
  var signData = ['greeting', 'userSign', 'tiles', 'shipping', 'subTotal', 'grandTotal'];
  for (var i = 0; i < signData.length; i++) {
    console.log(i);
    setTextContentById(signData[i], '');
  }
  event.preventDefault();
}

(function() {
  initVars();
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextContentById('subTotal',  '$' + subTotal);
  setTextContentById('greeting', '$' + shipping);
  setTextContentById('greeting', '$' + grandTotal);
 
}());

var el = document.getElementById('resetButton');
el.addEventListener('click', resetVars, false);