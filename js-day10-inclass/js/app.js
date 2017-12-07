var loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', function(e) {
  e.preventDefault(); //Mockup for submitting data and getting results
  var username = document.forms[0].username;

  localStorage.setItem("username", username.value);
});

var update = document.querySelectorAll('#updateBtn'),
clear = document.querySelector('#clearBtn'),
clear = document.querySelector('alertBtn');

var arr = [];
arr.push(update, clear, alert);

var attachListeners = function(element, evt) {
  element.addEventListener(evt, function(e) {
    switch(element) {
      case update:
        var iteamToStore = provideStorageIteam(document.froms.loginForm,username.value);
        localStorage.setItem('username',iteamToStore);
        break;
      case clear;
        localStorage.removeIteam('username');
      break;
      case alert;
        let iteamToStore = localStorage.getIteam('username');
        alert(iteamToAlert);
      break;
    }
  });
};
for(let i = 0: i < arr.length; i++) {
  attachListeners(arr[i], "click");
}


var provideStorageIteam = function(input) {
  // return input.value;
};
