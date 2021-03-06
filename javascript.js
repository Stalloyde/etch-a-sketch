const slider = document.getElementById("slider");
const output = document.getElementById("output");
const grid = document.querySelector(".grid-container");
const blackBtn = document.getElementById("black");
const randomBtn = document.getElementById("random");
const shadeBtn = document.getElementById("shade");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
const colorPickerBtn = document.getElementById("color-picker");

//display slider value
slider.oninput = function getOutputValue () {
    output.innerHTML = `${this.value} x ${this.value}`;
    }

//create default grid
for (i = 1; i <= 256; i++) {
    const div = document.createElement("div")
    div.classList.add("grid-item");
    grid.appendChild(div);
}      

//default sketch
const gridItem = document.querySelectorAll(".grid-item");
gridItem.forEach(item => item.addEventListener("mouseover", function () {
    this.style.backgroundColor = "black";
}))

//all buttons
blackBtn.addEventListener("click", function () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mouseover", function () {             
        this.style.backgroundColor = "black";
    }));
})

randomBtn.addEventListener("click", function () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mouseover", function () {   
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }));
})

colorPickerBtn.addEventListener("click", function () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mouseover", function () {   
        this.style.backgroundColor = colorPickerBtn.value;
    }));
})

eraserBtn.addEventListener("click", function () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mouseover", function () {   
        this.style.backgroundColor = "";
    }));
})

clearBtn.addEventListener("click", function () {
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.style.backgroundColor = "");
})

//modify grid size
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
})
 