const grid = document.querySelector("#grid");
let gridWidth = 8;
function createGrid() {
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

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", e => {
  let elements = document.getElementsByClassName("squareDiv");
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
  createGrid();
})
