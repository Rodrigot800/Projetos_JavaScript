var quantLove = prompt("quanto você me ama de 0 a 10 ?");
var msg = document.getElementById("msg");

if (quantLove <= 10) {
  msg.innerText = quantLove + "\n";
  msg.innerText += " você me ama muito pouco !!! \n game over";
} else if (11 < quantLove && quantLove <= 100) {
  msg.innerText = quantLove + "\n";
  msg.innerText += "você me ama pouco, te amo bem mais !!! \n game over";
} else if (101 < quantLove && quantLove < 10000) {
  msg.innerText = quantLove + "\n";
  msg.innerText +=
    "estou vendo que realmente me ama. porém, te amo bem mais !!! \n game over";
} else {
  msg.innerText = quantLove + "\n";
  msg.innerText +=
    "boa tentativa, mas eu te amo muuuuiiiittttooooo mais !!!! \n game over";
}

function refazerPerg() {
  location.reload();
}
