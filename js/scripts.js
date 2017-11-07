// var message = "hellow wolrd!";
// console.log(typeof message);
// var john = 23;
// console.log(typeof john);
// var bool = true;


// function practice(){
// notDeclared = 'when it works how i expect it to...';
//
// var declared = "js is awesome!!";
//
// };
//
// practice();
//
// console.log(notDeclared, declared);


// let fresh = true, otherVar = 0;

// console.log(fresh, otherVar);

// const name = "Ryan";
// console.log(name);
// if(fresh) {
//   const name = "Peter";
//   console.log(name);
// };
// console.log(name);


// var best = 'Star Wars';
// let best = 33;
// const best = 77;
// console.log(best);

// var rightNow = new Date('');
//
// var randomNumber = Math.random();
//
// var name = 'John';
//
// var stringObj = new String('John');

// console.log(typeof name, typeof stringObj);

// console.log(stringObj.split('o').join('ough'));

// let bestNumber = 42;
//
// // console.log(typeof bestNumber);
//
// let reallyBestNumber = new Number(42);
//
// // console.log(reallyBestNumber);
//
// let bool = new Boolean(true);
//
// // console.log(bool);
//
// let object = {
// firstName: 'Stephen',
// lastName: 'Johnstone',
// age:32
// };
//
// console.log(object);

// alert("hello!");
// var confirm = confirm("Are you sure?");
// consol.log(confirm);

// var userAnswer = prompt("What is your answer?");
// consol.log(userAnswer);



// day 3

let a = 1;
let b = '1';

function compare(){
  console.log(a==b)
}

compare();

let isOldEnough = true;
let hasWork = false;
let hasMoney = true;

function compare(){
  if (isOldEnough == true && (hasMoney == true || hasWork == false)){
    console.log('You are good!');
  }
}
else {
  console.log('Don\'t do this to yourself.');

  }
}
