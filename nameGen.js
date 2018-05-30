var nameOfStudent = document.getElementById("select");
//CREATE Allow for input of student names
//READ/UPDATE Updates list with student names being added
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    const newStudent = $(this).val();
    $(this).val("");
    $("#listNamesOne").append(
      "<li><span><i class='fas fa-trash'></i></Span> " + newStudent + " </li>"
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
  if (prompt("Are you sure you want to delete all names? (Type 'y' to delete!)") === "y") {
    $("li").remove()}
  }

//READ Create button to select li at random
//Get <li> text and //Add all <li> to arrays
function getNames(){
  var studentList = document.getElementById("listNamesOne").innerText;
  var namesList = studentList.split("\n");
  var selectedStudent = Math.floor(Math.random() * $("ul li").length + 1);
  return namesList[selectedStudent];
}

//Select random <li> and display data
$("#pickButton").on("click", function(){
  var studentList = document.getElementById("listNamesOne").innerText;
  var namesList = studentList.split("\n");
  var selectedStudent = Math.floor(Math.random() * $("ul li").length);
  nameOfStudent.textContent = namesList[selectedStudent];
});
