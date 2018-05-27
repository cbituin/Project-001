//CREATE Allow for input of student names
//READ/UPDATE Updates list with student names being added
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    const newStudent = $(this).val();
    $(this).val("");
    $("#listNamesOne").append(
      "<li><span>Delete</Span> " + newStudent + "</li>"
    );
  }
});

//DELETE Allows individual names to be deleted
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(300, function() {
    $(this).remove();
  });
});

//DELETE Create button to reset list of names (deletes all names)
$("#resetButton").on("click", function() {
  reset();
});

function reset() {
  if (
    prompt(
      "Are you sure you want to delete all names? (Type 'Yes' to delete!)"
    ) === "Yes"
  ) {
    $("li").remove()}}

//DELETE Create button to reset list of names (deletes all names)
$("#resetButton").on("click", function() {
  reset();
});

function reset() {
  if (
    prompt(
      "Are you sure you want to delete all names? (Type 'Yes' to delete!)"
    ) === "Yes"
  ) {
    $("li").remove()}}


//READ Create button to select li at random
function randomStudent(){ 
  let selectedStudent = Math.floor(Math.random() * $("ul li").length + 1);
  return selectedStudent;
} 


function generateRandomStudent(){
  var arr = []; 
  for(var i = 0; i < $("ul li").length; i++){
    arr.push(studentList.textContent;
    return arr[selectedStudent];  
  }
}




$("#pickButton").on("click", function(event){
var studentList = document.getElementsById("#listNamesOne");

});

//UPDATE *****Optional: Allows individual names to be edited? */
// $("ul").on("click", "li", function(){

// })
