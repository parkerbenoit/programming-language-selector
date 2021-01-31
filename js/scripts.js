$(document).ready(function() {
  $("form#selector").submit(function (event) {
    event.preventDefault();
    const question1 = parseInt($("input#question1").val());
    const question2 = parseInt($("input#question2").val());
    $("#selector").toggle();

    if (question1 === question2) {
      $("#output1").show();
    } else {
      $("#output3").show();
    }
  });
});
