//Function to create the boxes that fill the etch-a-sketch.
function boxMaker() {
    const container = document.querySelector('#container');
    const box = document.createElement('div');
    box.setAttribute('id', 'box');
    container.appendChild(box);
}
//function that determines the number of items in the grid, formats the grid and inserts the items.
function gridFiller(side = 16) {
    while(side > 100 || isNaN(side) || side == null || side ===''){
        side = prompt('please choose a number <= 100!');
    }
    let i = (side * side);
    let etch =document.querySelector('#container');
    etch.style.cssText = `grid-template-columns: repeat(${side}, 1fr); grid-template-rows: repeat(${side}, 1fr)`;
    while(i > 0){
        boxMaker();
        i--
    }
}
gridFiller();
coloring();

//function that cleans up the grid in preparation for a new one being created
function cleanUp(){
    const boxes = document.querySelectorAll('#box');
    boxes.forEach((div) => {
        div.remove();
    });
};
//function that adds event listeners to the items on the grid and allows for them to be colored on mouseover
function coloring() {
    const boxes = document.querySelectorAll('#box');

    boxes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if(div.className != 'colored'){
                div.style.cssText = `background-color : rgb(${~~(Math.random() * 256)}, ${~~(Math.random() * 256)}, ${~~(Math.random() * 256)}); opacity : 0.5;`;
                div.classList.add('colored');
                }
            div.style.opacity = parseFloat(div.style.opacity) + 0.1;
            if(div.style.opacity == 1) {
                div.style.cssText = 'background-color : black;';
            }       
        });
    });
}
//function that clears the grid, and makes a new one
function clear() {
        cleanUp();
        gridFiller(prompt('How many boxes would you like per side?'))
        coloring();
}
const button = document.querySelector('button');
button.addEventListener('click', () => clear());


