let numbers = '';                       //The first task.

for (let i=20; i<=30; i=i+0.5) {
    numbers +=i+' ';
}

console.log(numbers);                   //The first task.

let OneDollar = 27;                     //The second task.

for (let i=10; i<=100; i=i+10) {
    console.log(i+' Dollars = '+i*OneDollar);
}                                       //The second task.

let TheNumberN = 1001;                  //The third task.

for (let i=1; i<101; i++) {
    if(i*i<TheNumberN) {
        console.log(i);
    }
}                                       //The third task.

let SimpleNumber = 3;                   //The fourth task.
let SupportingArray = [];

for (let i=1; i<=SimpleNumber; i++) {
    if(SimpleNumber%i==0) {
        SupportingArray.push(SimpleNumber/i);
    }
}                                       

if (SupportingArray.length>2) {
    console.log('The Number is not simple.');
}

else { console.log('The number is simple.'); } //The fourth task.


let SomeNumber = 28;                        //The fifth task.
let Explaining;
for (let i = 1; i<=SomeNumber; i++) {
    if(3**i==SomeNumber) {
        console.log('The exponentation of this number is '+i);
        return;
    } 
}

console.log('There is no exponentation for this number'); //The fifth task.
