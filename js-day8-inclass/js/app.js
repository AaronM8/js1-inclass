var forms = document.forms;

forms.login.email.addEventListener('keydown', function(e){
  console.log(e.target["value"]);
})

const loginForm = forms.login;

function enableSubmit() {
  if(loginForm.password.value.length > 0 && loginForm.email.value.length > 0 && loginForm.password.value.length > 0) {
    loginForm.submit.removeAttribute('disabled');
    // document.getElementsByTagName("input")[0].removeAttribute("login");
  }
};
for(let i = 0; i < loginForm.length; i++) {
  loginForm[i].addEventListener('keyup', function(e) {
    enableSubmit();
  });
}

var practice = function() {
  var name = 'Aaron';
  // alert(this);
};
var me = 'name'
practice();
// console.log(this.me);

var clickDiv = document.querySelector('#click');
clickDiv.addEventListener('click', function(e) {
  console.log(this);
});


var checkScope = function() {
  console.log(this);
};

var obj = {
  test: checkScope,
  user: 'aaron'
};


checkScope.call(obj);

var name = 'Aaron';

funtion callName() {
  var name = 'Anthony';
  console.log(name); // assumption; hoiseted declaraion
};
callName();

console.log(name); // assumption hoisted declaration


let name = 'Aaron';

fuction callName() {
  let name = 'Anthony';
  console.log(name);
};
callName()

console.log(name);


const name = 'Aaron';

funtion callName() {
  const name = 'Anthony';
  console.log(name);
};
callName();

console.log(name);
