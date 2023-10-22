anArray = [true, 4, '4', 99, 44, 'x54', 321, '11'];
const theAverageArethmetic = AverageArethmetic(anArray);

function AverageArethmetic(el) {
    let theSumOfArray = 0;
    let theCountOfNumbers = 0;
    for (let i=0; i<el.length; i++) {
        if(parseInt(el[i])===el[i]) {
            theSumOfArray+=el[i];
            theCountOfNumbers+=1;
        }
    }
    return theSumOfArray/theCountOfNumbers;
}

console.log('The Aberage Arethmetic number from array is: '+theAverageArethmetic);

let firstNumber = +prompt('Write here the first number:');
let secondNumber = +prompt('Write here the second number:');
let theSymbol = prompt('Write here the symbol for equation(+,-,/,*,^,%)):');
const theMathEquation = doMath(firstNumber, secondNumber, theSymbol);

function doMath(x,y,znak) {
    x = parseInt(x);
    y = parseInt(y); 
    if (!isNaN(x) || !isNaN(y)) {
        switch(znak) {
            case '+': console.log(x,' + ',y,' = ',x+y);
            break;
            case '-': console.log(x,' - ',y,' = ',x-y);
            break;
            case '*': console.log(x,' * ',y,' = ',x*y);
            break;
            case '/': console.log(x,' / ',y,' = ',x/y);
            break;
            case '%': console.log(x,' % ',y,' = ',x%y);
            break;
            case '^': console.log(x+'^'+y,' = ',x**y);
            break;
            default: console.log('The syntax is incorrect.');
        }
    }
    else {
        console.log('The syntax is incorrect.');
    }
}


let theArrayElements = prompt('Type here an elements for the array:');
let secondlyLength = +prompt('Type here the length of the subArray:');
let mainLength = +prompt('Type here the length of the main array:');
anArrayCreator(mainLength, secondlyLength, theArrayElements);

function anArrayCreator (ml, sl, taa) {
    let theSecondArray = [];
    ml = parseInt(ml);
    sl = parseInt(sl);
    if(!isNaN(ml) || !isNaN(sl)) {
        for(let i=0; i<ml; i++) {
            theSecondArray.push([]);
            for(let t=0; t<sl; t++) {
                if((theArrayElements[t])==null) {
                    theSecondArray[i].push(' ');
                }
                else {
                    theSecondArray[i].push(theArrayElements[t])
                }
            }
        }
    }
    else {
        console.log('There is a bad syntax!');
    }
    console.log(theSecondArray);
}

let thePhrase = prompt('Type here your word(s):');
let theLetters = prompt('Type here the letters which should be shifted:')

let theLettersArray = [];

for(let i=0; i<theLetters.length; i++) {
    theLettersArray.push(theLetters[i]);
}

const editedWord = shiftLetters(thePhrase, theLettersArray);

function shiftLetters(phrase, letters) {
    let theResult = '';
    for(let i=0; i<phrase.length;i++) {
        if(!letters.includes(phrase[i])) {
            theResult += phrase[i];
        }
        else {
            theResult += ' ';
        }
    }
    return theResult;
}

console.log(editedWord);