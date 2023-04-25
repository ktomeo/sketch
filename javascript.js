const container = document.querySelector('#container');
var grid = document.querySelectorAll('.grid');
const gridFill = document.getElementsByClassName("grid");

let size = 5
let boxWidth = 500 / size

for (let i = 0; i < (size * size); i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    grid.setAttribute("style", `width: ${boxWidth}px; height: ${boxWidth}px`);
    gridFill[i].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    })
}




