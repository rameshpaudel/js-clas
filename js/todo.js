{/* <tr>
    <td>Get groceries</td> -> table title
    <td> -> table description
        <button>Remove</button>
    </td>
</tr> */}

document.querySelector('button').onclick = function(){
    addToDo();
}



function addToDo(){
    var question = prompt("Enter a todo item");
    
    var tableRow = document.createElement('tr');
    var tableTitle = document.createElement('td');
    var tableDesciption = document.createElement('td');
    var button = document.createElement('button');
    
    //Set value to the button
    button.innerText = "Remove"
    
    //Adding attributes to the button
        
    //While passing this you can access current clicked element
    button.setAttribute('onclick','remove(this)');
    
    //Creating parent child relation between td and button
    tableDesciption.appendChild(button); // td > button
    
    
    tableTitle.innerText = question;
    
    tableRow.appendChild(tableTitle);
    tableRow.appendChild(tableDesciption);
    
    
    document.querySelector('tbody').appendChild(tableRow)
    
    
}

var remove = function(index){
    console.log('remove button', index.parentElement.parentElement.remove())
    

}


// class => Function =>method 
// class => variable => property