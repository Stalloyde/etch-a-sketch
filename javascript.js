const slider = document.getElementById("slider");
const output = document.getElementById("output");
const grid = document.querySelector(".grid");


slider.oninput = function getOutputValue () {
    output.innerHTML = `${this.value} x ${this.value}`;
    }

function createGrid () {
    for (i = 1; i <= 256; i++) {
        const div = document.createElement("div")
        div.classList.add("grid-item");
        grid.appendChild(div);
    }
}

function modifyGrid () {
    slider.addEventListener("input", function () {
        const calGridSize = this.value * this.value;
        
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }

        for (i = 1; i <= calGridSize; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            grid.appendChild(div);
        }
    })       
}

function togglePen () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mousedown", hover));

    function hover () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mouseover", function ()  {
    this.classList.add("sketch-blue")}));
  }
}

createGrid();
togglePen();
modifyGrid();

// assign value of range to variable getGridSize
// variable calGridSize
// i <= calGridSize

// use slider
// slider returns a value.... slider.oninput 
// detect value... this.value
// use value for grid calculation