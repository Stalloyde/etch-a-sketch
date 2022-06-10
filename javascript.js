for (i = 1; i <= 256; i ++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        newDiv.textContent = "";
        document.querySelector(".grid").appendChild(newDiv);
    }

function sketchBlue () {

    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => item.addEventListener("mousedown", startInk));
    }

    function startInk () {
        const gridItem = document.querySelectorAll(".grid-item");
        gridItem.forEach(item => item.classList.toggle("blue-ink"));
    }

    
startInk();   

///entire grid turns blue as all grids are classed as .grid-item. how do i individualise them ? 
    // use array loops to give each grid an index?