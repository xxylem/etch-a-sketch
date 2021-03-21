
const getContainer = () => document.getElementById('container')

const removeContainer = () => {
    const oldContainer = getContainer();
    if (oldContainer) oldContainer.remove();
}

const shadeCell = (e) => {

}

const createGrid = (nCols) => {
    const totalCells = nCols * nCols;
    const newContainer = document.createElement('div');
    newContainer.id = 'container';

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        cell.addEventListener('mouseover', (e) => {
            cell.classList.add('shaded-cell');
            console.log(this);
        });
        newContainer.appendChild(cell);
    }

    newContainer.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;
    newContainer.style.gridTemplateRows = `repeat(${nCols}, 1fr)`

    removeContainer();
    document.querySelector('body').appendChild(newContainer);
}

createGrid(4);



