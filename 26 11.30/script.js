setInterval(()=>{
    document.querySelector('div').style.background=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
},500);

setInterval(()=>{
    document.querySelector('div').style.left=`${Math.random()*1820}px`;
    document.querySelector('div').style.top=`${Math.random()*863}px`;
},1000)



