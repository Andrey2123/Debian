/*const investorUrl="investor.json";
const firstType=document.querySelector('ul').appendChild(document.createElement('li'));

fetch(investorUrl)
.then(response => response.json())
.then(data => {
    firstType.innerHTML('dd');
})
*/

const files = ['investor', 'manager', 'assistant', 'worker'];
const list = document.querySelector('ul');

const myPromise = new Promise((resolve,reject)=>{

    const success = true;
    files.forEach(element => {
        fetch(`${element}.json`)
        .then(response=>response.json())
        .then(data => {
        list.innerHTML+=`
            <li>${data["sex"]}</li>
            <li>${data["age"]} y.o</li>
            <li>${data["dateOfBirth"]}</li>
            <li></li>`;
        });
    });
});