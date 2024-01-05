const postId = document.getElementById('post-id-input');
const requestIdButton = document.getElementById('input-request__button');
const requestTitle = document.getElementsByClassName('title-text');
const requestBody = document.getElementsByClassName('body-text');
const postBlock = document.querySelector('.output-block');
const commentsBlock = document.querySelector('.output-addition');
const getCommentsButton = document.createElement('button');
let properlyComments = [];
let commentsStatus = 0; 
let loadComments=()=>{};

requestIdButton.addEventListener('click', ()=>{
const postValidator = new Promise((resolve, reject)=>{
        postBlock.innerHTML='';
        commentsBlock.innerHTML='';
        properlyComments = [];
        getCommentsButton.removeEventListener('click', loadComments);
        if(postId.value<=100 && postId.value>0) {
            console.log('first')
            resolve();
        }
        else {
            reject();
        }
    })


postValidator.then(()=>{
    console.log('second')
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(data=>{
        data.forEach(element => {
            if(element["postId"]==postId.value) {
                properlyComments.push(element);
            }
        if(element["id"]==postId.value) {
            fetch('https://jsonplaceholder.typicode.com/posts') 
            .then(response=>response.json())
            .then(dataPost=>{
                postBlock.innerHTML=`
                    <p class="title-text">${dataPost[postId.value-1]["title"]}</p>
                    <span class="body-text">${dataPost[postId.value-1]["body"]}</span>
                `;
                commentsStatus=0;
                getCommentsButton.className="output-block__button";
                getCommentsButton.textContent="load comments";
                postBlock.appendChild(getCommentsButton);
            })
            }
            else {
                postValidator.catch(()=>{
                    console.log('err');
                })
            }
    });
    })
})
.catch(()=>{
    console.log('first step - error');
});

postValidator.then(
    getCommentsButton.addEventListener('click', loadComments = () => {
        if(commentsStatus==0) {
            for(let i=0;i<properlyComments.length;i++) {
                commentsBlock.innerHTML+=`
            <div class="output-addition-container">
                <div class="output-addition__title">
                    <h3 id="name">${properlyComments[i]["name"]}</h3>
                    <h3 id="email">${properlyComments[i]["email"]}</h3>
                </div>
                <div class="output-addition__body">
                    <span id="body">${properlyComments[i]["body"]}</span>
                </div>
            </div>`;
            };
            commentsStatus=1;
                }
        else {
                console.log('The comments are already uploaded!');
        }
    })
)

.catch(()=>{
    console.log('second step - error');
});     
});