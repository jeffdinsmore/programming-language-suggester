// Business logic

function cSharp (num1, num2, num3, num4, num5, num6) {
  if (Math.round((num1 + num2 + num3 + num4 + num5 + num6)/6) === 1) {
    return true
  }
}

function Go (num1, num2, num3, num4, num5, num6) {
  if (Math.round((num1 + num2 + num3 + num4 + num5 + num6)/6) === 2) {
    return true
  }
}

function Rust (num1, num2, num3, num4, num5, num6) {
  if (Math.round((num1 + num2 + num3 + num4 + num5 + num6)/6) === 3) {
    return true
  }
}

function Python (num1, num2, num3, num4, num5, num6) {
  if (Math.round((num1 + num2 + num3 + num4 + num5 + num6)/6) > 3) {
    return true
  }
}

// User interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    
    const question1Input = parseInt($("#question1").val());
    const question2Input = parseInt($("#question2").val());
    const question3Input = parseInt($("#question3").val());
    const question4Input = parseInt($("#question4").val());
    const question5Input = parseInt($("#question5").val());
    const question6Input = parseInt($("#question6").val());
    const inputtedName = $("#name").val();
    console.log(inputtedName);
    
    if (question1Input === 0 || question2Input === 0 || question3Input === 0 || question4Input === 0 || question5Input === 0 || question6Input === 0 || inputtedName.length < 1) {
      alert("Please answer all the questions before submitting");
    } else if (cSharp(question1Input, question2Input, question3Input, question4Input, question5Input, question6Input)) {
      $("#result").text("C#");
      $("#animate").show();
      $("#story").show();
      $("#form").hide();
      $("button#secondary").show();
      $("#nameInput").text(inputtedName);
      $("#complete").show();
      $("#fillOut").hide();
    } else if (Go(question1Input, question2Input, question3Input, question4Input, question5Input, question6Input)) {
      $("#result").text("GO");
      $("#story").show();
      $("#form").hide();
      $("button#secondary").show();
      $("#nameInput").text(inputtedName);
      $("#complete").show();
      $("#fillOut").hide();
    } else if (Rust(question1Input, question2Input, question3Input, question4Input, question5Input, question6Input)) {
      $("#result").text("Rust");
      $("#story").show();
      $("#form").hide();
      $("button#secondary").show();
      $("#nameInput").text(inputtedName);
      $("#complete").show();
      $("#fillOut").hide();
    } else if (Python(question1Input, question2Input, question3Input, question4Input, question5Input, question6Input)) {
      $("#result").text("Python");
      $("#story").show();
      $("#form").hide();
      $("button#secondary").show();
      $("#nameInput").text(inputtedName);
      $("#complete").show();
      $("#fillOut").hide();
    } 
    $("#secondary").click(function() {
      location.reload();
    });
  });
});