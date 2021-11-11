const items = document.querySelectorAll(".dropdown-item");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player1Button = document.querySelector("#addPlayer1");
const player2Button = document.querySelector("#addPlayer2");
const resetButton = document.querySelector("#reset");
const defaultButton = document.querySelector("#dropdownMenuButton")



let currMax = parseInt(defaultButton.innerText);
let player1Score = 0;
let player2Score = 0;

// Creation of Event Listeners
for (currItem of items) {
    currItem.addEventListener("click", setMaxScore);
}
resetButton.addEventListener("click", resetItems);
player1Button.addEventListener('click', addToPlayer1);
player2Button.addEventListener("click", addToPlayer2);

// Underlying event handlers
function setMaxScore(e) {
    currMax = parseInt(e.target.innerText);
    defaultButton.innerText = currMax;
    resetItems()
}
function addToPlayer1(e) {
    if (player1Button.disabled === true) {
        return;
    }
    player1Score += 1;
    player1.innerText = player1Score;
    if (player1Score === currMax) {
        player1Button.disabled = true;
        player2Button.disabled = true;
        player1.style.color = "green";
        player2.style.color = "red";
        player1Button.classList.add("opaque");
        player2Button.classList.add("opaque");
        player1Button.style.cursor = "not-allowed";
        player2Button.style.cursor = "not-allowed";

    }
}

function addToPlayer2(e) {
    if (player2Button.disabled === true) {
        return;
    }
    player2Score += 1;
    player2.innerText = player2Score;
    if (player2Score === currMax) {
        player1Button.disabled = true;
        player2Button.disabled = true;
        player1.style.color = "red";
        player2.style.color = "green";
        player1Button.classList.add("opaque");
        player2Button.classList.add("opaque");
        player1Button.style.cursor = "not-allowed";
        player2Button.style.cursor = "not-allowed";
    }
}

function resetItems() {
    player1Score = 0;
    player2Score = 0;
    player1.innerText = 0;
    player2.innerText = 0;
    player1Button.disabled = false;
    player2Button.disabled = false;
    player1.style.color = "black";
    player2.style.color = "black";
    player1Button.classList.remove("opaque");
    player2Button.classList.remove("opaque");
    player1Button.style.cursor = "auto";
    player2Button.style.cursor = "auto";
}