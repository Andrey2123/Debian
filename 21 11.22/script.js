const bodyHTML = document.querySelector('body');
const theTable = document.createElement('table');

bodyHTML.appendChild(theTable);
let number = 1;

for (let i=0; i<10; i++) {
    const tableRow = document.createElement('tr');
    theTable.appendChild(tableRow);
    for(let l=0; l<10;l++) {
        const tableDate=document.createElement('td');
        tableRow.appendChild(tableDate);
        tableDate.append(number);
        number++;
    }
}