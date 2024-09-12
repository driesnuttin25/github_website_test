// Game settings
const rows = 10;
const cols = 10;
const minesCount = 15;
let grid = [];
let gameOver = false;

// Initialize the game
function init() {
    grid = [];
    gameOver = false;
    document.getElementById('message').textContent = '';
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = '';

    // Create grid cells
    for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;

            // Event listeners for left and right clicks
            cell.addEventListener('click', revealCell);
            cell.addEventListener('contextmenu', placeFlag);

            gameContainer.appendChild(cell);

            grid[r][c] = {
                element: cell,
                mine: false,
                revealed: false,
                flagged: false,
                adjacentMines: 0,
            };
        }
    }

    // Randomly place mines
    let minesPlaced = 0;
    while (minesPlaced < minesCount) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        if (!grid[r][c].mine) {
            grid[r][c].mine = true;
            minesPlaced++;
        }
    }

    // Calculate adjacent mines for each cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!grid[r][c].mine) {
                let count = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const nr = r + i;
                        const nc = c + j;
                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc].mine) {
                            count++;
                        }
                    }
                }
                grid[r][c].adjacentMines = count;
            }
        }
    }
}

// Reveal a cell
function revealCell(e) {
    if (gameOver) return;
    const cell = e.target;
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);
    const currentCell = grid[r][c];

    if (currentCell.revealed || currentCell.flagged) return;

    currentCell.revealed = true;
    cell.classList.add('revealed');

    if (currentCell.mine) {
        cell.classList.add('mine');
        cell.textContent = '💣';
        gameOver = true;
        document.getElementById('message').textContent = 'Game Over! Press Spacebar to Restart.';
        revealAllMines();
    } else {
        if (currentCell.adjacentMines > 0) {
            cell.textContent = currentCell.adjacentMines;
        } else {
            // Reveal neighboring cells if no adjacent mines
            revealAdjacentCells(r, c);
        }
        checkWin();
    }
}

// Reveal adjacent cells recursively
function revealAdjacentCells(r, c) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const nr = r + i;
            const nc = c + j;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                const neighbor = grid[nr][nc];
                if (!neighbor.revealed && !neighbor.mine && !neighbor.flagged) {
                    neighbor.revealed = true;
                    neighbor.element.classList.add('revealed');
                    if (neighbor.adjacentMines > 0) {
                        neighbor.element.textContent = neighbor.adjacentMines;
                    } else {
                        revealAdjacentCells(nr, nc);
                    }
                }
            }
        }
    }
}

// Place or remove a flag
function placeFlag(e) {
    e.preventDefault();
    if (gameOver) return;
    const cell = e.target;
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);
    const currentCell = grid[r][c];

    if (currentCell.revealed) return;

    currentCell.flagged = !currentCell.flagged;
    if (currentCell.flagged) {
        cell.classList.add('flag');
        cell.textContent = '🚩';
    } else {
        cell.classList.remove('flag');
        cell.textContent = '';
    }
    checkWin();
}

// Check for win condition
function checkWin() {
    let revealedCount = 0;
    let correctlyFlagged = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            if (cell.revealed) revealedCount++;
            if (cell.flagged && cell.mine) correctlyFlagged++;
        }
    }

    if (revealedCount + minesCount === rows * cols || correctlyFlagged === minesCount) {
        gameOver = true;
        document.getElementById('message').textContent = 'You Win! Press Spacebar to Restart.';
    }
}

// Reveal all mines when game over
function revealAllMines() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            if (cell.mine) {
                cell.element.classList.add('mine');
                cell.element.textContent = '💣';
            }
        }
    }
}

// Restart the game on spacebar press
document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        init();
    }
});

// Initialize the game on window load
window.onload = init;
