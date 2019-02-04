var addToDo = function(){
    var todo = prompt("Enter your todo");

    if( todo.length < 2){
        return;
    }

    var tableRow = document.createElement('tr');
    var title = document.createElement('td');
    var description = document.createElement('td');
    var removeButton = document.createElement('button');
    var hideButton = document.createElement('button');
    
    hideButton.classList.add('red');
    
    title.innerText = todo;
    
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('onclick', 'remove(this)');
    
    hideButton.innerText = 'Hide';
    hideButton.setAttribute('onclick', 'toggleHide(this)');
    
    
    //Add button to the 2nd row
    description.appendChild(removeButton);
    description.appendChild(hideButton);
    
    //Add title to the row
    tableRow.appendChild(title);
    
    //Add description to the row
    tableRow.appendChild(description);

    


    //Adding table row to the table body
    document.querySelector('tbody').appendChild(tableRow)
    
}

var remove = function(event){
    console.log('element tagName', event.tagName);
    console.log('Outer Tag', event.outerHTML);
    console.log('parents tagName', event.parentElement.tagName);
    
    //Remove the element
    event.parentElement.parentElement.remove();
}

var toggleHide = function(event){
    event.parentElement.parentElement.classList.toggle('hide');
}


///

document.querySelector('#toggle-hidden').onclick = function(event){
    document.querySelector('body').classList.toggle('show');
}  

document.querySelector('button').onclick = function (){
    addToDo();
}