window.onload = function () {
  var btn = document.getElementById("convert");
  btn.onclick = function () {
    var km = document.getElementById("km");
    var result = document.getElementById("result");
    result.innerHTML = km.value / 1.6;
  };
};
