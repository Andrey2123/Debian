let UserInput1 = prompt("Choose your operation(add, sub, mult, div)");
let UserInput2 = prompt('The first number:');
let UserInput3 = prompt('The second number:');

const num1 = parseInt(UserInput2);
const num2 = parseInt(UserInput3);

const addition = num1+num2;
const substraction = num1-num2;
const multiplication = num1*num2;
const division = num1/num2;

if ( UserInput1 == "add" ) {
    alert(num1 + "+" + num2 + "=" + addition);
}

else if ( UserInput1 == "sub") {
    alert(num1 + "-" + num2 + "=" + substraction);
}

else if ( UserInput1 == "mult" ) {
    alert(num1 + "*" + num2 + "=" + multiplication);
}

else if ( UserInput1 == "div" ) {
    alert(num1 + "/" + num2 + "=" + division);
}

else {
    alert(Error());
}

