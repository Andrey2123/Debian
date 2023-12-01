const theInput=document.getElementById('text');
const theCheckButton=document.getElementById('check');
const redirectButton=document.querySelector('button');
let array = ['h','t','t','p','s',':','/','/'];

theCheckButton.addEventListener('click',()=>{
    console.log(theInput.value);
    for(let i=0; i<array.length; i++) {
        if(array[i]==theInput.value[i]) {
            theInput.style.border='2px solid green';
        }
        else {
            theInput.value='https://'+theInput.value;
            break;
        }
    }
});

redirectButton.addEventListener('click',()=>{
    window.location.href=theInput.value;
})