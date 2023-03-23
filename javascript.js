const slider = document.getElementById('slider');
const output = document.getElementById('output');
const grid = document.querySelector('.grid-container');
const blackBtn = document.getElementById('black');
const randomBtn = document.getElementById('random');
const shadeBtn = document.getElementById('shade');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const colorPickerBtn = document.getElementById('color-picker');

//display slider value
slider.oninput = function getOutputValue() {
  output.innerHTML = `${this.value} x ${this.value}`;
};

//create default grid
for (i = 1; i <= 256; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  grid.appendChild(div);
}

//default sketch
let isMouseDown = false;
let drawColour = 'black';

window.addEventListener('mousedown', function () {
  isMouseDown = true;
});

window.addEventListener('mouseup', function () {
  isMouseDown = false;
});

function draw() {
  grid.addEventListener('mousemove', function (e) {
    if (e.target.className === 'grid-item') {
      if (isMouseDown) {
        e.target.style.backgroundColor = drawColour;
      }
    }
  });
}

function removeFunctionDraw() {
  grid.removeEventListener('mouseover', function (e) {
    if (e.target.className === 'grid-item') {
      if (isMouseDown) {
        e.target.style.backgroundColor = drawColour;
      }
    }
  });
}

removeFunctionDraw();
draw();

//all buttons
blackBtn.addEventListener('click', function () {
  removeFunctionDraw();
  drawColour = 'black';
  draw();
});

randomBtn.addEventListener('click', function () {
  removeFunctionDraw();
  drawColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
  draw();
});

colorPickerBtn.addEventListener('change', function () {
  removeFunctionDraw();
  drawColour = colorPickerBtn.value;
  draw();
});

eraserBtn.addEventListener('click', function () {
  removeFunctionDraw();
  drawColour = 'white';
  draw();
});

clearBtn.addEventListener('click', function () {
  removeFunctionDraw();
  const gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((item) => (item.style.backgroundColor = ''));
  draw();
});

//modify grid size
slider.addEventListener('input', function () {
  const calGridSize = this.value * this.value;

  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }

  for (i = 1; i <= calGridSize; i++) {
    const sqRoot = Math.sqrt(calGridSize);
    const div = document.createElement('div');
    div.classList.add('grid-item');
    grid.appendChild(div);
    grid.style.setProperty(
      'grid-template-columns',
      'repeat(' + sqRoot + ', 1fr)'
    );
  }
});
