$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
  $("#work-responses").show();
  var userResponces = [];
// userResponces.sort();
  $("input:checkbox[name=work-transportation]:checked").each(function() {
    var workTransportationMode = $(this).val();
    userResponces.push(workTransportationMode);
    $("#work-responses").append(userResponces+ "<br>");
  });
$("#fun-responses").show();
$("input:checkbox[name=fun-transportation]:checked").each(function() {
  var funTransportationMode = $(this).val();
  $("#fun-responses").append(funTransportationMode + "<br>");
 });
$("#transportation_survey").hide();
 });
});
    
