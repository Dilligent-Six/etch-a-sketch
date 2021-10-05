const grid = document.querySelector("#gridContainer");
let defaultDimension = 16;

//function to create the grid based on dimension size
function createGrid(dimension = defaultDimension){
    for (i=0; i<dimension; i++){
        let row = document.createElement("div");
        row.className = "row";
        row.style.backgroundColor = "whiteSmoke";
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.flex = "1 auto";
        row.style.borderBottom = "thin solid black"

        grid.append(row);

        for(c=0; c<dimension; c++){
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.backgroundColor = "whiteSmoke";
            cell.style.borderRight = "thin solid black";
            cell.style.flex = "1 auto";
            row.append(cell);
        }
    }
}

//add event listener to change cells to black on mouseover
grid.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('cell')) {
      e.target.style.backgroundColor = "black";
    }
  });

//add button to clear and initialize grid
let sidebar = document.querySelector(".sidebar");
let clearButton = document.createElement("button");
clearButton.textContent = "Clear Grid/Change Size";
sidebar.style.display = "flex";
clearButton.style.width = "100%";
clearButton.style.padding = "20px 0 20px 0";
clearButton.style.fontSize = "20px";

sidebar.appendChild(clearButton);

clearButton.addEventListener('click', function (e) {
    grid.textContent = '';
    let selection = prompt("Please enter the number of rows/columns you would like (ex. 16 for a 16x16 grid, maximum 100x100):");
    if (selection > 100){
        createGrid(100);
    }else if (isNaN(selection)){
        alert("You didn't enter a number, press the Clear Grid/Change Size button to try again!");
    }else{
        createGrid(selection);
    }
    
  });

createGrid();