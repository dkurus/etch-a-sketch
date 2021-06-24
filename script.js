const gridContainer = document.querySelector('.container');
let allTheCells = document.querySelectorAll('.cells');
function create16Divs () {
    for (let i = 0; i < 256; i++) {
     
     let divSelector = document.createElement('div');
     divSelector.className = 'cells';
     gridContainer.appendChild(divSelector);
    }
    colorsTheCells();
}
create16Divs();

function colorsTheCells () {
    let allTheCells = document.querySelectorAll('.cells');
    allTheCells.forEach((item) => {
    item.addEventListener('mouseover', e => {
        e.target.style.background = 'black';
    })
})
}

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
    // allTheCells.forEach((item) => {
    //     item.style.background = 'white';    
    // })
  
  const userCellNumberInput = prompt('please decide the amount of pixels the width should be \r\n(max 100 cells)', 16);

  gridResizer(userCellNumberInput);
})

function gridResizer (userInput) {
    removeAllCellsForRefresh();
    let userInput2Num = Number(userInput);
    let totalCellsNeeded = userInput2Num * userInput2Num;
    
    let cellSizeCalc = (100*(1 / userInput2Num))
    gridContainer.style.gridTemplateColumns = `repeat(${userInput2Num},${cellSizeCalc}%)`;

    for (let i = 0; i < totalCellsNeeded; i++){
        let divSelector = document.createElement('div');
        divSelector.className = 'cells';
        gridContainer.appendChild(divSelector);
    }
    colorsTheCells();
}

function removeAllCellsForRefresh () {
    const everyCell = document.querySelectorAll('.cells')
    everyCell.forEach((cell)=> {
        gridContainer.removeChild(cell);
    })
}
    