var userName = prompt('What is your name?','Joe');
var favColor - prompt('What is your favorite color?','Acceptable red, orange, yellow, green, blue, pink, purple, black, white, and grey');
favColor = favColor.toLowerCase();
switch(favColor) {
  case 'red':
  alert('red is good.');
  break;

  case 'orange':
  alert('orange is good.')
  break;

  case 'yellow':
  alert('yellow is good')
  break;

  case 'green':
  alert('green is good')
  break;
  
  case 'blue':
  case 'pink':
  case 'purple':
  case 'black':
  case 'white':
  case 'grey':

  default:
    alert('Try again');
}
