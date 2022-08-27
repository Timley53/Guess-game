"strict mode";
const container = document.querySelector(".container");
const random = document.querySelector(".random");
const instr = document.querySelector(".instr");
const yourguess = document.querySelector(".yourguess");
const guessbtn = document.querySelector(".guessbtn");
const showbtn = document.querySelector(".showbtn");
const reset = document.querySelector(".reset");
const scores = document.querySelector(".scores");
const Histor = document.querySelector(".history");
const highscore = document.querySelector(".highscore");

///var
let Guess;
let points = 20;
let Highscore = 0;

highscore.textContent = `Highscore: 0`;

const MovPoints = function (T) {
  T === true ? points++ : points--;
  scores.textContent = `${points} Points`;
};
const guess = function () {
  const g = Math.trunc(Math.random() * 20) + 1;
  //   console.log(g);
  return g;
};
////////////

reset.addEventListener("click", function () {
  Guess = guess();
  points = 20;
  instr.textContent = "Enter Your Guess";
  scores.textContent = `${points} Points`;
  yourguess.value = "";
  random.textContent = "Guess ?";
  Histor.innerHTML = "";

  console.log(Guess);
});
////////////

guessbtn.addEventListener("click", function () {
  const inputGuess = Number(yourguess.value);

  if (!inputGuess || inputGuess < 1) {
    instr.textContent = "Please enter a valid number between 1 and 20";
  } else if (inputGuess) {
    if (inputGuess > Guess) {
      if (points > 0) {
        var history = `
 <div class="history">
        <div class="slot">
          <p>Your Guessed the nunber</p>

          <button class="slot-guess">${inputGuess}</button>

          <button class="status wrong " id="status">Wrong</button>
        </div>
      </div> 
`;
        instr.textContent = "too high, Try again";
        Histor.insertAdjacentHTML("afterbegin", history);
        MovPoints(false);
      } else if (points < 1) {
        instr.textContent = "You lost⛔";
      }
    } else if (inputGuess < Guess) {
      if (points > 0) {
        var history = `
 <div class="history">
        <div class="slot">
          <p>Your Guessed the nunber</p>

          <button class="slot-guess">${inputGuess}</button>

          <button class="status wrong " id="status">Wrong</button>
        </div>
      </div> 
`;
        instr.textContent = "too low, try again";
        Histor.insertAdjacentHTML("afterbegin", history);
        MovPoints(false);
      } else if (points < 1) {
        instr.textContent = "You lost⛔";
      }
    } else if (inputGuess === Guess) {
      var history = `
 <div class="history">
        <div class="slot">
          <p>Your Guessed the nunber</p>

          <button class="slot-guess">${inputGuess}</button>

          <button class="status right " id="status">Right</button>
        </div>
      </div> 
`;
      instr.textContent = "You guessed right 🥇✅, Reset to play Again";

      random.textContent = Guess;
      Histor.insertAdjacentHTML("afterbegin", history);
      if (points > Highscore) {
        Highscore += points;
        highscore.textContent = `Highscore: ${Highscore}`;
      }
    }
  }

  console.log(inputGuess, Guess);
});
let show = false;
showbtn.addEventListener("click", function () {
  if (!show) {
    show = true;
  } else if (show) {
    show = false;
  }

  random.textContent = show ? Guess : "Guess ?";
});
