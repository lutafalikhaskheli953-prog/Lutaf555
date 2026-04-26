let users = { Ali: 1000 };

function add() {
  let u = document.getElementById("user").value;
  let a = parseInt(document.getElementById("amount").value);

  if (!users[u]) users[u] = 0;
  users[u] += a;

  alert("Balance Updated");
}