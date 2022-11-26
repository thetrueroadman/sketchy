const grid = document.querySelector("#grid");
let gridWidth = 8;
for (let i = 0; i < (gridWidth * gridWidth); i++) {
  const square = document.createElement("div");
  square.className = "squareDiv";
  square.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'black';
  })
  square.innerHTML = "cup";
  grid.appendChild(square);
}
