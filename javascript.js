const container = document.querySelector('#container');
var grid = document.querySelectorAll('.grid');
const gridFill = document.getElementsByClassName("grid");



function startNew() {
    const elements = document.getElementsByClassName("grid");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    let size = prompt('Set grid width');
    let boxWidth = 500 / size
    if (size >= 100) {
        alert('Error. Please return a number smaller than 100.')
    }  else if (size < 100) {
            for (let i = 0; i < (size * size); i++) {
                const grid = document.createElement('div');
                grid.classList.add('grid');
                container.appendChild(grid);
                grid.setAttribute("style", `width: ${boxWidth}px; height: ${boxWidth}px`);
                gridFill[i].addEventListener("mouseover", (event) => {
                    event.target.style.backgroundColor = "black";
                });
            }
        }
}

