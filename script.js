let balance = 1000;

function deposit() {
  let amount = prompt("Enter amount:");
  balance += parseInt(amount);
  document.getElementById("balance").innerText = balance;
}

function withdraw() {
  let amount = prompt("Enter amount:");
  if (amount <= balance) {
    balance -= parseInt(amount);
    document.getElementById("balance").innerText = balance;
  }
}