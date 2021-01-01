console.log("Js Code Started");
function bindings() {
  console.log("I AM doing bindings");
  var btnTest = document.getElementById("btnTest");
  btnTest.onclick = handleClick;
  var btnCelebrate = document.getElementById("btnCelebrate");
  btnCelebrate.onclick = handleCelebration;
  // console.log(btnTest);
}
// bindings(); // WIll be called when JS is First Run. DOM is not ready
window.onload = bindings;
// console.log("After Binding OnLoad Event");
function handleClick() {
  console.log("Click Handled");
  var para = document.getElementById("myParagraph");
  para.innerHTML = "You Just Clicked a Button";
}

function handleCelebration() {
  var newYearParagraph = document.getElementById("newYear");
  if (newYearParagraph.classList.contains("green")) {
    newYearParagraph.classList.remove("green");
    newYearParagraph.classList.add("red");
    return;
  }
  if (newYearParagraph.classList.contains("red")) {
    newYearParagraph.classList.remove("red");
    newYearParagraph.classList.add("green");
    return;
  }
}
