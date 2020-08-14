// Business logic

function cSharp (num1, num2, num3) {
  if (Math.round((num1 + num2 + num3)/3) === 1) {
    return true
  }
}

$(document).ready(function() {
  $("button#submit").click(function() {
    event.preventDefault();


// User interface logic
    const flavor = $("input:[name=exampleradios]:checked").val();

    const question1Input = $("select#question1").val();
    const question2Input = $("select#question1").val();
    const question3Input = $("select#question1").val();
    const question4Input = $("select#question1").val();
    const question5Input = $("select#question1").val();

    if (cSharp(question1Input, question2Input, question3Input, question4Input, question5Input)) {
      $("#result").html("C#");
    } else if ( joe === "") {
      $("#result-riker").show();
    }
    
  });
});