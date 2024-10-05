var id=0;
var b=false;
function toggleAddTaskMenu(){

        document.getElementById("popup").classList.toggle("hide");
}
function addTask(){
    var inputFieldValue = document.getElementById("task-input").value;
    var newListItem  =document.createElement("li");
    newListItem.setAttribute(`id` , `item-${id}`);
    newListItem.innerHTML=
    `<div>
        <div class="task-check-container">
            <div class="checkbox-wrapper-13">
                <input id="c1-13" type="checkbox">
            </div>
            <p id="task-${id}">${inputFieldValue}</p>
        </div>
        <div class="edit-delete-container">
            <button class="edit-button edit-delete" id="edit-${id}" onclick="edit(${id})">Edit</button>
            <button class="delete-button edit-delete" onclick="deleteItem(${id})">Delete</button>
        </div>

    </div>`;
    document.getElementById("tasks-list").appendChild(newListItem);
    alert("Task Added")
    toggleAddTaskMenu();
    id++;
    
}
function edit(id){
    b=!b;
   document.getElementById(`task-${id}`).setAttribute("contenteditable" , b);
   alert("Task Edited");
   if(b===true){
    document.getElementById(`edit-${id}`).innerHTML = "Done"
   }
   else{
    document.getElementById(`edit-${id}`).innerHTML = "Edit"
   }
}
function deleteItem(id){
    document.getElementById(`item-${id}`).remove();
    alert("Task Removed")
}