// Business logic

function cSharp (num1, num2, num3, num4, num5) {
  if (Math.round((num1 + num2 + num3 + num4 + num5)/5) === 1) {
    return true
  }
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
  $("#secondary").click(function() {
    $("#result").hide();
    $("#story").hide();
    $("#form").show();
    $("button#submit").show();
    $("button#secondary").hide();

// User interface logic

    const question1Input = parseInt($("#question1").val());
    const question2Input = parseInt($("#question2").val());
    const question3Input = parseInt($("#question3").val());
    const question4Input = parseInt($("#question4").val());
    const question5Input = parseInt($("#question5").val());
    const inputtedName = $("#name").val();
    
    if (cSharp(question1Input, question2Input, question3Input, question4Input, question5Input)) {
      $("#result").text("C#");
      $("#story").show();
      $("#form").hide();
      $("button#secondary").show();
      $("#nameInput").text(inputtedName);
    } else {
      $("#story").show();
    }
    
    });
  });
});