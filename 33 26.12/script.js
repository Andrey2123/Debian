const selectHtml = document.getElementById('jokesCategories');
const requestButton = document.getElementById('request-button');
const listHtml = document.getElementById('displayed-jokes');

let counter = 0;

fetch('https://api.chucknorris.io/jokes/categories')
.then(response => response.json())
.then((data)=>{
    data.forEach(element => {
        selectHtml.innerHTML+=`<option class="select-option" id="${element}" value="${element}" >${element}</option>`;
    });
})

requestButton.addEventListener('click', ()=>{
    selectHtml.querySelector(`#${selectHtml.value}`).disabled='true';
    fetch(`https://api.chucknorris.io/jokes/random?category=${selectHtml.value}`)
    .then(response=>response.json())
    .then((data)=>{
        listHtml.innerHTML+=`
            <li>
                <p>Category: <b>${data["categories"]}</b></p>
                <p>${data["value"]}</p>
                <button>Remove joke</button>
            </li>
        `;
    });
});

document.addEventListener('click',(el)=>{
    let currentButton;
    document.querySelectorAll('button').forEach(element => {
        if(el.target==element) {
            currentButton = el.target;
            for(let i=0; i<listHtml.querySelectorAll('li').length; i++) {
                if(el.target===listHtml.querySelectorAll('li')[i].querySelector('button')) {
                    selectHtml.querySelector(`#${listHtml.querySelectorAll('li')[i].querySelector('b').textContent}`).disabled=false;
                    listHtml.querySelectorAll('li')[i].remove();
                };
            };
        };
    })

})