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

const myPromise = new Promise((resolve)=>{
    files.forEach(element => {
        fetch(`${element}.json`)
        .then(response=>response.json())
        .then(data=>{
            list.innerHTML+=`
            <ul>
                <li>${data["age"]}</li>
                <li>${data["sex"]}</li>
                <li>${data["dateOfBirth"]}</li>
            </ul>
            `
        })    
        .then(console.log('Done!'))
        .catch(console.log("Processing..."))
    });
});

