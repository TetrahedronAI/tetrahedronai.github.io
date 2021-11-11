function landingPage() {
  window.location.href = 'https://neuron-ai.github.io/';
}

function navbarMenu() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}