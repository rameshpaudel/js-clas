{/* <tr>
    <td>Get groceries</td> -> table title
    <td> -> table description
        <button>Remove</button>
    </td>
</tr> */}

document.querySelector('button').onclick = function(){
    addToDo();
}

var position = 0;
var todo = []
var elements = [];

function addToDo(){
    var question = prompt("Enter a todo item");
    
    var tableRow = document.createElement('tr');
    var tableTitle = document.createElement('td');
    var tableDesciption = document.createElement('td');
    var button = document.createElement('button');
    todo.push(question);
    //Create onclick attribute
    var removeItem = document.createAttribute('onclick');
    //Setting the value to onclick 
    removeItem.value = `remove(${todo.indexOf(question)})`;
    
    
    //Set value to the button
    button.innerText = "Remove"
    
    //Adding attributes to the button
    button.setAttributeNode(removeItem);
    
    //Creating parent child relation between td and button
    tableDesciption.appendChild(button); // td > button
    
    
    tableTitle.innerText = question;
    
    tableRow.appendChild(tableTitle);
    tableRow.appendChild(tableDesciption);
    
    
    document.querySelector('tbody').appendChild(tableRow)
    
    
}

var remove = function(index){
    var body = document.querySelector("tbody");    
    if(position == 0){
        index = 0
    }
    body.removeChild(body.children[index]);

}


var todo = [];