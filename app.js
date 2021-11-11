const items = document.querySelectorAll(".dropdown-item");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player1Button = document.querySelector("#addPlayer1");
const player2Button = document.querySelector("#addPlayer2");
const resetButton = document.querySelector("#reset");

addToPlayer1();

for (item of items) {
}

function addToPlayer1() {
    let currValue = parseInt(player1.textContent);
    console.log(currValue);
}

function resetItems() {

}