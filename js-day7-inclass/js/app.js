var div = document.querySelector('.text');
// div.textContent = 'hello world';
// div.innerHTML = '<h1 class="text-center">This is cool</h1>';
var myNewPTag = document.createElement('p');
// var myDiv = document.createElement('div');
// myDiv.textContent = 'Star Wars....:()';
myNewPTag.textContent = 'stuff';
// div.appendChild(myNewPTag)
// console.log(myNewPTag);
// div.append(myDiv, myNewPTag);
var ul = document.querySelector('ul');
var lis = document.querySelectorAll('li');
ul.insertBefore(myNewPTag, lis[2]);

myNewPTag.className = 'text-center text-danger';

// myNewPTag.classList.add('bg-success');

myNewPTag.addEventListener('click', function(e) {

});
var myImg = document.createElement('img');
myImg.setAttribute('sre', 'http://google.com');

div.appendChild(myImg);

// var userInput = ' Gnbu TB HB  gbn   002'
// userInput = userInput.split(' ').trim().join(' ');
