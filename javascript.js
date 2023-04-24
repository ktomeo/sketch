const container = document.querySelector('#container');
var grid = document.querySelectorAll('.grid');

let size = 16

for (let i = 0; i < (size * size) - 1; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    grid.setAttribute('style', 'width: 5px; height: 5px');
}
