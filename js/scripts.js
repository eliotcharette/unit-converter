var galliter = function(number1) {
  return number1 / 0.26417;
};

var number1 = parseInt(prompt("Enter number of gallons:"));
var result = galliter(number1);
alert(result);

var cupsml = function(number1) {
  return number1 * 240 + "ml";
};

var number1 = parseInt(prompt("Enter number of cups:"));
var result = cupsml(number1);
alert(result);
