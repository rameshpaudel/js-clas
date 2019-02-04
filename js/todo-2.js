var addToDo = document.querySelector('button');

addToDo.onclick = function(){
    var value = prompt("Enter to do item");



    var tableRow = document.createElement('tr');
    var todo = document.createElement('td');
    var status = document.createElement('td');
    
    //Creating a button
    var button = document.createElement('button');
    button.setAttribute('onclick','remove(this)');
    button.innerText = "Remove"

    todo.innerText = value;

    status.appendChild(button);

    //Adding todo to the row
    tableRow.appendChild(todo);
    //Adding status to the row
    tableRow.appendChild(status);

    document.querySelector('tbody').appendChild(tableRow);

}


var remove = function(element){
    element.parentElement.parentElement.remove();
    // console.log(element.parentElement.parentElement);
}