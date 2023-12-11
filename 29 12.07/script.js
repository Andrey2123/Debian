const listItems = document.querySelectorAll('.list-item');
const arrayCards = document.querySelectorAll('.card');
let selectedArray=[];

window.onload=viewSelectedElement(arrayCards);

listItems.forEach(element=>{
    element.addEventListener('click',()=>{
        selectedArray=[];
        for(let i=0;i<arrayCards.length;i++) {
            if(element.textContent==arrayCards[i].id) {
                arrayCards[i].style.display="flex";
                selectedArray.push(arrayCards[i]);
            }
            else {
                arrayCards[i].style.display="none";
            }
        }
        viewSelectedElement(selectedArray);
    })
});

function viewSelectedElement(ar){
    ar.forEach(element=>{
        element.addEventListener('click',()=>{
            document.querySelector('.right-block').style.display='flex';
            document.querySelector('.middle-block').style.width='60vw';
            document.querySelector('.right-block__image').src=element.querySelector('.card__image').src;
            document.querySelector('.right-block__paragraph').textContent=element.querySelector('.card-paragraph').textContent;
            document.querySelector('.right-block__text').textContent=element.querySelector('.card-text').textContent;
        });
    });
};

document.querySelector('.right-block__button').addEventListener('click',()=>{
    alert('The product has been bought.');
    document.querySelector('.right-block').style.display='none';
    document.querySelector('.middle-block').style.width='85vw';
});