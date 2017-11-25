// var myId  = document.querySelector('#hello');
//
// myId.addEventListener('click', ((e) => ){
//   console.log(e);
// }));

var myEventFn = function() {

};

// Math.floor(Math.random() * (max - min +1)) + min;
var textWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
var input = document.querySelector('#myInput');
var body = document.querySelector('body');
let myPTag = document.querySelector('#myPTag');
input.addEventListener('keydown', ((e) => {
  let userInput = e.target.value;
  let r = Math.floor(Math.random() * ((textWeights.length - 1) -1 +1)) + 1;
  let randomColor = textWeights[r];
  body.style.background = randomColor;
  myPTag.innerHTML = userInput;
  if(e.keycode == 13) {
    
  }
}));
