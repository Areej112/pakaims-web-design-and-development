function dance() {
  $("#para").addClass("redBox").fadeOut(1000);
}

$(function () {
  $("#btnTest").click(dance);
});
