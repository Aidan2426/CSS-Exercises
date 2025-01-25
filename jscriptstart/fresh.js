document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#container");

    const redParagraph = document.createElement('p');
    redParagraph.textContent = "Hey I'm red";
    redParagraph.style.color = 'red';
    container.appendChild(redParagraph);

    const blueHeading = document.createElement('h3');
    blueHeading.textContent = "I'm a blue h3";
    blueHeading.style.color = 'blue';
    container.appendChild(blueHeading)

    const div = document.createElement('div');
    div.style.border = '2px solid black';
    div.style.backgroundColor = 'pink';

    const innerHeading = document.createElement('h1'); 
    innerHeading.textContent = "I'm in a div";
    div.appendChild(innerHeading);

    const innerParagraph = document.createElement('p');
    innerParagraph.textContent = "ME TOO";
    div.appendChild(innerParagraph);

    container.appendChild(div);
});
