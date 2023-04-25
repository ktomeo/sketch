const container = document.querySelector('#container');
var grid = document.querySelectorAll('.grid');

let size = 29
let boxWidth = 500 / size
let path = `width: ${boxWidth}px; height: ${boxWidth}px`

for (let i = 0; i < (size * size) - 1; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    grid.setAttribute("style", path);
}

console.log(path)