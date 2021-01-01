console.log("Js Code Started");

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
