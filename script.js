const gridContainer = document.querySelector('.container');

function create16Divs () {
    for (let i = 0; i < 256; i++) {
     
     let divSelector = document.createElement('div');
     divSelector.className = 'cells';
     gridContainer.appendChild(divSelector);
     
    }
}

create16Divs();

const allTheCells = document.querySelectorAll('.cells');
// allTheCells.forEach('mouseover', e => {
//     e.target.style.color = 'black';
// })

allTheCells.forEach((item) => {
    item.addEventListener('mouseover', e => {
        e.target.style.background = 'black';
    })
})

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
    
})

