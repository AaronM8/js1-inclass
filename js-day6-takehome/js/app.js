var inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {

  var pushed = innerHtml;

  if (pushed == '=') {
    //Calculator
    inputlabel.innerHtml = eval(inputLabel.innerHtml);
  } else if (pushed == 'AC') {
    //All Clear
    inputLabel.innerHtml == '0';
  } else {
    if (inputLabel.innerHtml == '0') {
      inputLabel.innerHtml = pushed;
    } else {
      inputLabel.innerHtml += pushed;
    }
  }

}
