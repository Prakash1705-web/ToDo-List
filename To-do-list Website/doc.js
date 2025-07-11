function addTask() {
  var inputTask = document.getElementById("input");
  var inputval = inputTask.value.trim();

  if (inputval === "") {
    alert("Please enter a task");
    return;
  } 
  else {
    var tasklist = document.getElementById("list-container");
    tasklist.innerHTML += '<li>'+ inputval +'<button >Delete</button></li>';
    // tasklist.innerHTML += "<li>" + inputTask.value + "</li>";
    inputTask.value = "";
    
  }
}
