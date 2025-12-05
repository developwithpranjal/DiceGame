// const box = document.querySelectorAll(".box");
const heading = document.querySelectorAll(" h1");
const gallery = document.querySelector("#diceimg img");
let roll = document.querySelector(".rollbtn");
let undo = document.querySelector(".undobtn");

const images = [
  "./images/dice1.jpg",
  "./images/dice2.jpg",
  "./images/dice3.jpg",
  "./images/dice4.jpg",
  "./images/dice5.jpg",
  "./images/dice6.jpg",
];

let initial = 0;
let previous = [];

roll.addEventListener("click", () => {
  let num = Math.floor(Math.random() * images.length) + 1;
  gallery.src = images[num - 1];
  console.log(num);
  previous.push(initial);
  initial += num;

  if (initial >= 100) {
    initial = 100;
  }
  heading[initial - 1].classList.add("active");

  if (initial === 100) {
    initial = 0;
    alert("Congrats! You won the game.");
    heading.forEach((box) => box.classList.remove("active"));
  }
});
undo.addEventListener("click", () => {
  heading[initial - 1].classList.remove("active");
  initial = previous.pop();
});
