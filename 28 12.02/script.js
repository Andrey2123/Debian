const firstEmoji = document.getElementById('first-emoji');
const secondEmoji = document.getElementById('second-emoji');
const thirdEmoji = document.getElementById('third-emoji');
const fourthEmoji = document.getElementById('fourth-emoji');
const fifthEmoji = document.getElementById('fifth-emoji');

const firstCounter = document.getElementById('counter-1');
const secondCounter = document.getElementById('counter-2');
const thirdCounter = document.getElementById('counter-3');
const fourthCounter = document.getElementById('counter-4');
const fifthCounter = document.getElementById('counter-5');

const addIcon = document.getElementById('add-icon');

const tableDataArray = document.querySelectorAll('td');
const documentBody = document.querySelector('body');

const emojies = [firstEmoji,secondEmoji,thirdEmoji,fourthEmoji,fifthEmoji];
const counters = [firstCounter,secondCounter,thirdCounter,fourthCounter,fifthCounter];


emojies.forEach(element => {
    for(let i=0;i<=emojies.length;i++) {
        if (element==emojies[i]) {
            var elementCounter = counters[i];
        }
    }
    let count=0;
    element.addEventListener('click', ()=>{
        count++;
        elementCounter.textContent=count;
    })
});

addIcon.addEventListener('click',()=>{
    document.querySelector('table').style.visibility='visible';    
});

let emojiesCountersCounter = emojies.length+1;

tableDataArray.forEach(element => {
    element.addEventListener('click', ()=>{
        const container = document.createElement('div');
        var containerImg = container.appendChild(document.createElement('img'));
        const containerParagraph = container.appendChild(document.createElement('p'));
        const src = element.querySelector('img').src;
        containerImg.src=src;
        
        emojiesCountersCounter++;

        documentBody.appendChild(container);
        containerParagraph.id=`counter-${emojiesCountersCounter}`;
        containerParagraph.style.textAlign='center';
        containerParagraph.textContent='0';
        containerImg.id=`emoji-${emojiesCountersCounter}`;

        counters.push(containerParagraph);
        emojies.push(containerImg);

        let count=0;
        containerImg.addEventListener('click', ()=>{
            count++;
            containerParagraph.textContent=count;
        })

        console.log(counters);
        console.log(emojies);

        container.querySelector('img').src=element.querySelector('img').src
    
    })
});
