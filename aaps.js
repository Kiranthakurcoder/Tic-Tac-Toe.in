let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-btn");
let msgcon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Function to reset the game
const restgame = () => {
  turnO = true;
  anabeldboxes();
  msgcon.classList.add("hide");
};


const anabeldboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// Adding event listeners to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("this was clicked");

    if (turnO) {
      box.innerText = "O";
      box.style.color = "#000814";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#bf211e";
      turnO = true;
    }

    box.disabled = true;
    checkwinner();
  });
});

// Function to show the winner
const showwinnwe = (winner) => {
  msg.innerText =`Congratulations! Winner is ${winner}`;
  msg.style.color="#EAE151"
  msgcon.classList.remove("hide");
  disabledboxes();
};

// Function to check for a winner
const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner");
        showwinnwe(pos1);
      }
    }
  }
};


const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


newgame.addEventListener("click", restgame);
resetbtn.addEventListener("click", restgame);
