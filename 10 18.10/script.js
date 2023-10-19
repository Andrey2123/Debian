const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = generateKey(20, characters);

function generateKey(length, symbols) {
    let key='';
    for(let i=0; i<length; i++) {
        key += symbols[Math.floor(Math.random()*i)];
    }   
    return key; 
}
console.log(key);
