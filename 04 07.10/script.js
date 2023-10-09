let FirstArray = [];  // The first task.
for (let i = 10; i<=20; i++) { 
    FirstArray.push(i);
}

console.log (FirstArray);  // The first task.

let SecondArray = [];  // The second task.
for (let t = 10; t<=20; t++) { 
    SecondArray.push(t*t);
}

console.log(SecondArray);  // The second task.

for (let a = 0; a<11; a++) {    // The third task.
    console.log(a + ' * 7 = ' + a*7);
}                                // The third task.

let sum = 0;                    //The fourth task.

for (let b = 1; b<=15; b++) {
    sum += b;
}

console.log(sum);               //The fourth task.

let thesum = 1;                    //The fifth task.

for (let c = 15; c<=35; c++) {
    thesum *=c;
    thesum = Math.floor(thesum);
}
console.log(thesum);               //The fifth task.

let value = 0;                    //The sixth task.
let LastNumber = 500;

for (let d = 1; d<=LastNumber; d++) {
    value +=d;
}

value = value/LastNumber;
console.log(Math.floor(value));               //The sixth task.

let argument = 0;                               //The seventh task.

for (e = 30; e<=80; e++) {                      
    if (e%2 == 0) {
        argument +=e;
    }
    else {
        argument +=0;
    }
}

console.log(argument);                         //The seventh task.

let AnArray = [];                               //The eighth task.

for (e = 100; e<=200; e++) {                      
    if (e%3 == 0) {
        AnArray.push(e);
    }
    else {
        argument +=0;
    }
}

console.log(AnArray);                         //The eighth task.

function Division(a) {                          //The ninth task.
    for (let i = 1; i<=a; i++) {
        if(a%i==0) {
            console.log(a + ' / ' + i + ' = ' + a/i);
        }
    }
}                                                   //The ninth task.

let AnArrayOfDiviers = [];                          //The tenth task.

function QuantityOfDividers(b) {        
    for (let i=1; i<=b; i++) {
        if(b%i==0 && i%2==0) {
            AnArrayOfDiviers.push(i);
        }
    }
    console.log( 'There are ' + AnArrayOfDiviers.length + ' of even divisers for the divider '+b+'.');
}                                                   //The tenth task.

let TheSecondSum = 0;                          //The eleventh task.

function TheSumOfDividers(q) {        
    for (let i=1; i<=q; i++) {
        if(q%i==0 && i%2==0 ) {
            TheSecondSum +=i;
        }
    }
    console.log(TheSecondSum);
    TheSecondSum = 0;
}                                                   //The eleventh task.

for(let r=1; r<=10; r++) {                          //The twelvth task.
    for (let y=1; y<=10; y++) {
        console.log(r+' * '+y+' = '+r*y);
    }
    console.log('               ');
}                                                   //The twelvth task.
