function game() {
  const userChoice = document.getElementById("operation").value;
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result;

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! Computer chose ${computerChoice}.`;
  } else {
    result = `You lose! Computer chose ${computerChoice}.`;
  }

  document.getElementById("result").innerText = result;
}
