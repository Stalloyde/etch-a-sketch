const slider = document.getElementById("slider");
const output = document.getElementById("output");
const grid = document.querySelector(".grid-container");

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
            const sqRoot = Math.sqrt(calGridSize);
            const div = document.createElement("div");
            div.classList.add("grid-item");
            grid.appendChild(div);
            grid.style.setProperty("grid-template-columns", "repeat(" + sqRoot + ", 1fr)");
        }
    togglePen();
    })       
}

function togglePen () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mousedown", hover));

    function hover () {
    gridItem.forEach(item => item.addEventListener("mouseover", function ()  {
    this.classList.add("sketch-blue")}));
  }
}

createGrid();
togglePen();
modifyGrid();