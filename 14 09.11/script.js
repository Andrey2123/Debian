console.log({}.prototype === {}.prototype); //true, тому що порівнюємо властивості двох однакових змінних.

function sayHello() {};
console.log(sayHello.prototype === sayHello.__proto__); // false, бо властивість prototype показує властивості обʼєктів створених через зазначену функцію, а proto показує властивість самої функції. 

function sayHello() {};
function sayGoodBye() {};
console.log(sayHello.__proto__ === sayGoodBye.__proto__); // true, бо порівнюються властивості двох однакових функцій.

console.log(sayHello.prototype === sayGoodBye.prototype); // false, бо порівнюються створенні цими двома функціями данні, а в тих данних написані різні конструктори 

let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype); // false, бо від стрілочної функції не показую очікуваний prototype.

let age = 22;
console.log(age.prototype === Number.prototype); // false, бо age це не функція, __proto__ і prototype видають різні значення. 

console.log(age.__proto__ === Number.prototype); // true, тут вже порівнюються само число age(тобто його властивості) і властивості змінної Number.


/*function Test() {}
console.log(Test.__proto__ === Object.prototype);

let num = 77;
console.log(num.__proto__ === Number.prototype)*/