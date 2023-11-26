function setFirstItemClassName(level) {
    let path='';
    for(let i=0;i<level;i++) {
        path+=' ul';
    }
    const ulElements = document.querySelectorAll(`${path}`);
    ulElements.forEach(element => {
        element.firstElementChild.classList.add('first');
        element.lastElementChild.classList.add('last');
    });
}

setFirstItemClassName(2);

