const slider = document.getElementById("slider");
const output = document.getElementById("output");
slider.oninput = function getOutputValue () {
    output.innerHTML = this.value;
}

function createGrid () {
    
    slider.addEventListener("input", function () {
        calGridSize = output.innerHTML * output.innerHTML;

        for (i = 1; i <= calGridSize; i ++) {
        const oldDiv = document.createElement("div");
        oldDiv.classList.add("grid-item");
        const oldGrid = document.querySelector(".grid");
        oldGrid.appendChild(oldDiv);
        
        const newDiv = document.createElement("span");
        newDiv.classList.add("grid-item");
        oldGrid.appendChild(newDiv);        
        }
    })
}

//check if div grid is empty. if empty, appendchild. if not empty, replace child.
//now the problem is the appendChild. the value of each slide input is staacking onto each other.
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

// assign value of range to variable getGridSize
// variable calGridSize
// i <= calGridSize

// use slider
// slider returns a value.... slider.oninput 
// detect value... this.value
// use value for grid calculation