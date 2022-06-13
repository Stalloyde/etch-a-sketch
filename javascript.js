function createGrid () {
    for (i = 1; i <= 256; i ++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        newDiv.textContent = "";
        document.querySelector(".grid").appendChild(newDiv);
    }
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
//right idea to mousedown = hover, mouseup = stopHover. how to write function for stopHover?
