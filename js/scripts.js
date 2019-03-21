
$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    // debugger;
    event.preventDefault();

var userResult = [];


  $("input:checkbox[name=low]:checked").each(function() {
    var lowInput = parseInt($(this).val());
    userResult.push(lowInput);
    // $("#low").append(lowInput+ "<br>");
  });

$("input:checkbox[name=high]:checked").each(function() {
  var highInput = parseInt($(this).val());
  userResult.push(highInput);

  // $("#high").append(highInput + "<br>");
 });

 if (userResult < 9) {
  $("#low").show();
} else if (userResult >= 15) {
  $("#high").show();
 } else {
   // console.log ("working netural")
  $("#medium").show();
 }
  $("#stress-test").hide();
 });
});
