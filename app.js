const CONTAINER = document.querySelector("#container");
const CLEARGRID = document.querySelector(".clearBtn");
const BLACK = document.querySelector(".black");
const RGB = document.querySelector(".rgb");
const ERASER = document.querySelector(".eraser");
const HEADING = document.querySelector(".header h1");
const INCREMENTALBLACK = document.querySelector(".incremental-black");

let size = 16;

// Event listeners
window.addEventListener("DOMContentLoaded", createGrid(size));
CLEARGRID.addEventListener("click", clearGrid);
RGB.addEventListener("click", drawRgb);
BLACK.addEventListener("click", drawBlack);
ERASER.addEventListener("click", erase);
INCREMENTALBLACK.addEventListener("click", drawIncreasedGreyness);

// function to create grid of size*size
function createGrid(size) {
  CONTAINER.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  CONTAINER.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 1; i <= size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    CONTAINER.appendChild(cell);
  }
  let gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "rgba(0,0,0,1)";
    });
  });
}

// function to clear the current grid and create a new one based on user's input
function clearGrid() {
  do {
    size = Number(
      prompt("Enter a size to clear the current grid and create new grid")
    );
  } while (size < 1 || size > 100);
  let gridCells = document.querySelectorAll(".cell");
  if (gridCells) {
    gridCells.forEach((gridCell) => {
      gridCell.remove();
    });
    createGrid(size);
  } else {
    createGrid(size);
  }
}

// function to switch to black color
function drawBlack() {
  let gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((gridCell) => {
    gridCell.removeEventListener("mouseover", function () {
      let rc = randomColor();
      this.style.backgroundColor = rc;
      HEADING.style.color = rc;
    });
    gridCell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "rgba(0,0,0,1)";
      HEADING.style.color = "rgba(0,0,0,1)";
    });
  });
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

// function to switch to random color
function drawRgb() {
  let gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((gridCell) => {
    gridCell.removeEventListener("mouseover", function () {
      this.style.backgroundColor = "rgba(0,0,0,1)";
      HEADING.style.color = "rgba(0,0,0,1)";
    });
    gridCell.addEventListener("mouseover", function () {
      let rc = randomColor();
      this.style.backgroundColor = rc;
      HEADING.style.color = rc;
    });
  });
}

// function to erase the grid
function erase() {
  let gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((gridCell) => {
    gridCell.removeEventListener("mouseover", function () {
      this.style.backgroundColor = "rgba(0,0,0,1)";
      HEADING.style.color = "rgba(0,0,0,1)";
    });
    gridCell.removeEventListener("mouseover", function () {
      let rc = randomColor();
      this.style.backgroundColor = rc;
      HEADING.style.color = rc;
    });
    gridCell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#fff";
      HEADING.style.color = "rgba(0,0,0,1)";
    });
  });
}

// function to increase the blackness by 10% for a cell
function drawIncreasedGreyness() {
  let gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((gridCell) => {
    let brightness = 0.1;
    gridCell.removeEventListener("mouseover", function () {
      this.style.backgroundColor = "rgba(0,0,0,1)";
      HEADING.style.color = "rgba(0,0,0,1)";
    });
    gridCell.removeEventListener("mouseover", function () {
      let rc = randomColor();
      this.style.backgroundColor = rc;
      HEADING.style.color = rc;
    });
    gridCell.addEventListener("mouseover", function () {
      this.style.backgroundColor = `rgba(0,0,0,${brightness})`;
      brightness += 0.1;
      HEADING.style.color = "rgba(0,0,0,1)";
    });
  });
}
