let AnArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let TheSum = 0;
let TheQuantity = 0;


for (let i=0; i<= AnArray.length; i++) {
    if (AnArray[i]>0) {
        TheSum += AnArray[i];
        TheQuantity +=1;
    }
}
console.log('The sum of the array`s elements: '+TheSum+'. \n'+'The quantity of the array`s elements is '+TheQuantity+'.');

for (let t=0; t<=AnArray.length; t++) {
    if (AnArray[t]==Math.min(...AnArray)) {
        let TheCount = t+1
        console.log('The smallest number from array is: '+Math.min(...AnArray)+'. \nThe count of this number is: '+TheCount+'.');
    }
}

for (let c=0; c<=AnArray.length; c++) {
    if (AnArray[c]==Math.max(...AnArray)) {
        let TheCount = c+1
        console.log('The biggest number from array is: '+Math.max(...AnArray)+'. \nThe count of this number is: '+TheCount+'.');
    }
}

let TheQuantityOfNegative = 0;

for (let i=0; i<=AnArray.length; i++) {
    if (AnArray[i]<0) {
        TheQuantityOfNegative +=1;
    }
}
console.log('The quantity of negative elements is '+TheQuantityOfNegative+'.');

let TheQuantityOfPositiveUnPaired = 0;

for (let k=0; k<=AnArray.length; k++) {                                                                                                             //The fifth task.
    if (AnArray[k]%2!=0 && AnArray[k]>0) {
        TheQuantityOfPositiveUnPaired +=1;
    }
}
console.log('The Quantity of positive unpaired elements is: '+TheQuantityOfPositiveUnPaired+'.');                                               //The fifth task.

let TheQuantityOfPositivePaired = 0;

for (let k=0; k<=AnArray.length; k++) {                                                                                                             //The sixth task.
    if (AnArray[k]%2==0 && AnArray[k]>0) {
        TheQuantityOfPositivePaired +=1;
    }
}
console.log('The Quantity of positive paired elements is: '+TheQuantityOfPositivePaired+'.');                                                   //The sixth task.   

let TheSumOfPositivePairedElements = 0;

for (let i=0; i<=AnArray.length; i++) {                                                                                                             //The seventh task.
    if (AnArray[i]%2==0 && AnArray[i]>0) {
        TheSumOfPositivePairedElements += AnArray[i];
    }
}
console.log('The sum of positive paired elements is: '+TheSumOfPositivePairedElements+'.');                                                   //The seventh task.   

let TheSumOfUnpairedPositiveElements = 0;                                                                                                       //The eighth task.

for (let i=0; i<=AnArray.length; i++) {                                                                                                             
    if (AnArray[i]%2!=0 && AnArray[i]>0) {
        TheSumOfUnpairedPositiveElements += AnArray[i];
    }
}
console.log('The sum of positive unpaired elements is: '+TheSumOfUnpairedPositiveElements+'.');                                                 //The eighth task.   

let TheProductOfPositiveElements = 1;                                                                                                           //The nineth task.

for (let i=0; i<=AnArray.length; i++) {                                                                                                             
    if (AnArray[i]>0) {
        TheProductOfPositiveElements *= AnArray[i];
    }
}
console.log('The product of positive elements is: '+TheProductOfPositiveElements+'.');                                                          //The nineth task.  

const UpdatedArray = AnArray.map(function(element) {                                                                                            //The tenth task.
        if(Math.max(...AnArray)==element) {
            return element=Math.max(...AnArray);
        }
        else {
            return element=0;
        }
})

console.log(UpdatedArray);                                                                                                                      //The tenth task.


