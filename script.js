
const btns = document.querySelectorAll('.btn');
const result = document.getElementById('player'); 
const resetBtn = document.getElementById('reset');
let playerO = true; 
let gameOver = false;
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!gameOver && btn.innerHTML === "") {
            btn.innerHTML = playerO ? "X" : "O";
            btn.style.color = playerO ? "red" : "blue";
            playerO = !playerO;
            result.textContent = `Player ${playerO ? "X" : "O"}'s turn`;
            if (checkWin()) {
                result.textContent = `Player ${btn.innerHTML} wins!`;
                gameOver = true;
            }
        }
    });
});

resetBtn.addEventListener("click", () => {
    btns.forEach(btn => {
        btn.textContent = "";
        btn.disabled = false;
        btn.classList.remove('winner'); 
    });
    result.textContent = "Player O's turn"; 
    playerO = false; 
    gameOver = false; 
});

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (btns[a].innerHTML && btns[a].innerHTML === btns[b].innerHTML && btns[a].innerHTML === btns[c].innerHTML) {
            btns[a].classList.add('winner');
            btns[b].classList.add('winner');
            btns[c].classList.add('winner');
            return true;
        }
    }
    return false;
}

function disableButtons() {
    btns.forEach(btn => {
        btn.disabled = true;
    });
}
