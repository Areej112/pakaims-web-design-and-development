$(function () {
  $("#loadDataBtn").click(loadData);
  loadData();
});

function loadData() {
  console.log("Ajax Request Sending Start");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
    success: todosReceived,
  });

  console.log("Ajax Request Sending End");
}

function todosReceived(response) {
  console.log("Ajax Request Data Received");
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    let title = response[i].title;
    let completed = response[i].completed ? "Yes" : "No";
    $("#tableBody").append(`<tr><td>${title}</td><td>${completed}</td>`);
  }
}
