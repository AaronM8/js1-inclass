var todos = [];
for(let i = 0; i <= 3; i++){
  let todo = [];
  var userTodo = ('This you want to get done?');
  var dueDate = promt('How long do you want it to take?', '1');
  dueDate = pareInt(dueDate);
  if(dueDate == NaN){
    alert('Not a number');
  } else {
    todo.push(userTodo, dueDate);
    todos.push(todo);
  }
  if(todos.legth ==3){
    break;
  } else {
    continue;
  }
}

let v = 0;
while(v < 2) {
  if(todos[v] < todos[v - 1][1]){
    
  }
  todos[v][1]
}


// [["thing1", 1], ["thing2", 2]]
