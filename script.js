const grid = document.querySelector("#grid");
const slider = document.querySelector("#rangeSlider");

function createGrid() {
  let gridWidth = document.getElementById("rangeSlider").value;
  for (let i = 0; i < (gridWidth * gridWidth); i++) {
    const square = document.createElement("div");
    square.className = "squareDiv";
    square.addEventListener("mouseover", function(event) {
      event.target.style.backgroundColor = 'black';
    })
    square.innerHTML = "cup";
    grid.appendChild(square);
  }
}

createGrid();

function clearGrid() {
  let elements = document.getElementsByClassName("squareDiv");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", e => {
  clearGrid();
  createGrid();
})

const applyBtn = document.getElementById("applyBtn");
applyBtn.addEventListener("click", e => {
  clearGrid();
  createGrid();
})
