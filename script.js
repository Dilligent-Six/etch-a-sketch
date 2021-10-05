const grid = document.querySelector("#gridContainer");
let defaultDimension = 16;

//function to create the grid based on dimension size
function createGrid(dimension = defaultDimension){
    for (i=0; i<dimension; i++){
        let row = document.createElement("div");
        row.className = "row";
        row.style.backgroundColor = "white";
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.flex = "1 auto";
        row.style.borderBottom = "thin solid black"

        grid.append(row);

        for(c=0; c<dimension; c++){
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.backgroundColor = "white";
            cell.style.borderRight = "thin solid black";
            cell.style.flex = "1 auto";
            row.append(cell);
        }
    }
}

createGrid();