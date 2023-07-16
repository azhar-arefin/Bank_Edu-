

$(document).ready(function() {


   // login button event handler

   var login = $("#login");
login.click(function(){
const loginArea =  $("#login-area");
loginArea.css("display" , "none");

$("#transaction-area").css("display" , "block");

});



 // deposit button event handler
 $("#addDeposit").click(function() {
   var depositNumber = getInputNumber("depositAmount");
   
   updateSpanText("currentDeposit", depositNumber);
   updateSpanText("currentBalance", depositNumber);

   $("#depositAmount").val("");
 });

 // withdraw button event handler
 $("#addWithdraw").click(function() {
   var withdrawNumber = getInputNumber("withdrawAmount");

   updateSpanText("currentWithdraw", withdrawNumber);
   updateSpanText("currentBalance", -1 * withdrawNumber);

   $("#withdrawAmount").val("");
 });
});

function getInputNumber(id) {
 var amount = $("#" + id).val();
 var amountNumber = parseFloat(amount);
 return amountNumber;
}

function updateSpanText(id, addedNumber) {
 var current = $("#" + id).text();
 var currentNumber = parseFloat(current);
 var totalAmount = addedNumber + currentNumber;
 $("#" + id).text(totalAmount);
}



