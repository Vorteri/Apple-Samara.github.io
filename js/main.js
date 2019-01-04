$(document).ready(function(){
 $('.btn').on("click", function(){
  $('.overlay').show("slow");
});
 $('.popup__close').on("click", function(){
  $('.overlay').hide("slow");
});
});

$( document ).ready(function() {
	$("#btn").click(
function(){
sendAjaxForm('result_form', 'ajax_form', '../PHPMailer/gmail.php');
return false; 
}
);
});
