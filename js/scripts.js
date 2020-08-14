// Business logic

$(document).ready(function() {
  $("button#submit").click(function() {
    event.preventDefault();


// User interface logig
    const flavor = $("input:[name=exampleradios]:checked").val();

    const question1 = $("select#question1").val();

    if ( === "") {
      
    } else if ( === "") {
      $("#result-riker").show();
    }
    
  });
});