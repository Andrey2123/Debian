let UserInput1 = prompt('The first number:');
let UserInput2 = prompt('The second number:');

const num1 = parseInt(UserInput1);
const num2 = parseInt(UserInput2);

const addition = num1+num2;
const substraction = num1-num2;
const multiplication = num1*num2;
const division = num1/num2;

alert(num1 + '+' + num2 + '=' + addition + "\n" + num1 + '-' + num2 + '=' + substraction + "\n" + num1 + '*' + num2 + '=' + multiplication + "\n" + num1 + '/' + num2 + '=' + division);


