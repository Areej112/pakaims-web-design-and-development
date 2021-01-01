function convert() {
  var km = document.getElementById("km");
  var result = document.getElementById("result");
  result.innerHTML = km.value / 1.6;
}

function binding() {
  var btn = document.getElementById("convert");
  btn.onclick = convert;
}

window.onload = binding;
