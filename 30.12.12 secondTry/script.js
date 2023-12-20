const files = ['investor', 'manager', 'assistant', 'worker'];
const list = document.querySelector('ul');

for(let i=0;i<files.length;i++) {
    let url = "investor.json";
    let innerList="";
    fetch(`${files[i]}.json`)
    .then(response => response.json())
    .then(url=`${files[i]}.json`)
    .then(data=> {
        innerList=`
        <li>${data["age"]}</li>
        <li>${data["sex"]}</li>
        <li>${data["dateOfBirth"]}</li>
        `
    })
    .catch(console.log('Done!'))

    const request = new XMLHttpRequest();
    const method = 'GET';

    request.open(method, url);

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            list.innerHTML+=innerList;
        }
        else if(request.status != 200) {
            console.log("An Error!");
        }
    }

    request.send();
}

