 const body = document.querySelector('body');

class violetSquare {
    constructor() {
        Object=document.createElement('div');
        Object.classList.add('square');
        body.appendChild(Object);
    }
    boom() {
        this.boom=document.createElement('h3');
        this.boom.textContent='BOOM!'
        Object.appendChild(this.boom);
    }
}


//---------------------
const square = new violetSquare(0,0);
square.boom();
//---------------------
const obj=document.querySelector('div');

let numUp=0;
let numDown=0;
let numX=0;
document.addEventListener("keydown", (event)=>{
    if ( event.code === 'ArrowDown' ) {
        numUp+=10;
        obj.style.top=`${numUp}px`;
        obj.style.transition='0s';
    }
    if( event.code === 'ArrowUp' ) {
        numUp-=10;
        obj.style.top=`${numUp}px`;
        obj.style.transition='0s';
    }
    if ( event.code === 'ArrowLeft' ) {
        numX+=10
        obj.style.right=`${numX}px`;
        obj.style.transition='0s';
    }
    
    if( event.code === 'ArrowRight' ) {
        numX-=10;
        obj.style.right=`${numX}px`;
        obj.style.transition='0s';
    }
    if(event.ctrlKey) {
        obj.style.height='120px';
        obj.style.width='250px';
        obj.style.transition='1s';
        setTimeout(()=>{
        obj.style.height='200px';
        obj.style.width='200px';  
        }, 1000);
    }
})

document.addEventListener("keydown",()=>{
    if (numUp<=-390) {
        numUp=-360;
        obj.style.top=`${numUp}px`;
        document.querySelector('h3').style.opacity='100%';
        setTimeout(()=>{
            document.querySelector('h3').style.opacity='0%';
        },2000);
        obj.style.transition='0.3s';
        setTimeout(()=>{
            obj.style.transition='0s';
        },350);
    }
    if (numUp>=390) {
        numUp=360;
        obj.style.top=`${numUp}px`;
        document.querySelector('h3').style.opacity='100%';
        setTimeout(()=>{
            document.querySelector('h3').style.opacity='0%';
        },2000);
        obj.style.transition='0.3s';
        setTimeout(()=>{
            obj.style.transition='0s';
        },350);
    }
    if (numX<=-870) {
        numX=-840;
        obj.style.right=`${numX}px`;
        document.querySelector('h3').style.opacity='100%';
        setTimeout(()=>{
            document.querySelector('h3').style.opacity='0%';
        },2000);
        obj.style.transition='0.3s';
        setTimeout(()=>{
            obj.style.transition='0s';
        },350);
    }
    if (numX>=870) {
        numX=840;
        obj.style.right=`${numX}px`;
        document.querySelector('h3').style.opacity='100%';
        setTimeout(()=>{
            document.querySelector('h3').style.opacity='0%';
        },2000);
        obj.style.transition='0.3s';
        setTimeout(()=>{
            obj.style.transition='0s';
        },350);
    }
})

document.addEventListener('keyup', (event)=>{
    if(event.code === 'Space') {
        obj.style.transition='1s';
        numUp-=10;
        obj.style.top=`${numUp}px`;
        setTimeout(()=>{
            numUp+=10;
            obj.style.top=`${numUp}px`;
        },1000);
    }
})