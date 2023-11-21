const bodyHTML = document.querySelector('body');
const paragraphText = document.querySelector('p');
paragraphText.addEventListener('mouseover', mouseOverText);
paragraphText.addEventListener('mouseout', mouseOutText)
function mouseOverText () {
    const rightDiv = document.createElement('div');
    bodyHTML.append(rightDiv);
    rightDiv.append('TEXT');
} 

function mouseOutText () {
    bodyHTML.removeChild(document.querySelector('div'));
}