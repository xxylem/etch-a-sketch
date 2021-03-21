const createNewGrid = (nCols) => {
    const totalCells = nCols * nCols;
    const newContainer = document.createElement('div');
    newContainer.id = 'container';

    const shadeCell = (e) => {
        e.target.classList.add('shaded-cell');
    }

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        cell.addEventListener('mouseover', shadeCell);
        newContainer.appendChild(cell);
    }

    newContainer.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;
    newContainer.style.gridTemplateRows = `repeat(${nCols}, 1fr)`

    const removeContainer = () => {
        const oldContainer = document.getElementById('container');
        if (oldContainer) oldContainer.remove();
    }

    removeContainer();
    document.querySelector('body').appendChild(newContainer);
}

const promptUserToReset = () => {
    const nCols = parseInt(prompt('What size grid do you want? Enter a number between 1 and 100 to specify the number of rows and columns.'));

    if (typeof nCols !== 'number') return;
    if (nCols < 1 || nCols > 100) return;

    createNewGrid(nCols);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener("click", promptUserToReset);

createNewGrid(50);



