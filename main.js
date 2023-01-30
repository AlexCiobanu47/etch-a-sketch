const container = document.querySelector('.container');
const button = document.querySelector('.button');
let isDrawn = false;

function generateBoard(){
    //delete previous board if it exists
    if(isDrawn === true){
        const rows = document.querySelectorAll('.row');
        rows.forEach(x => {
            x.remove();
        });
    }
    //generate the new board
    const size = prompt('size of the board:');
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add("flex-container");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < size; j++){
            const box = document.createElement('div');
            box.classList.add("flex-item");
            box.classList.add("square");
            row.appendChild(box);
        }
    }
    //add on hover event for all the squares
    const grid = document.querySelectorAll('.square');
    console.log(grid);
    grid.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.classList.add("selected-box");
    
        });
    });
    isDrawn = true;
}    
button.addEventListener('click', () => {
    generateBoard();
});





