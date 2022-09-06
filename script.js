$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#sendName").click(function () {
    //console.log($("#fname").val());
    $("#greetingOutput").text("Hello " + $("#fname").val());
  });
});