//Select the element that you want to listen to the events

var button = document.querySelector("button");

var allButton = document.querySelectorAll("button");

//When the button is clicked
button.onclick = function() {
    console.log("clicked on button");
};

button.ondblclick = function() {};

//When the button
button.onmouseover = function(){
    console.log('The cursor is over the button')
}

var container = document.querySelector(".container");

container.onmouseenter = function(){
    document.body.style.background = `rgba(${random(255)}, ${random(255)},${random(255)}, 1)`;
}

container.onmouseleave = function(){
    document.body.style.background = `rgba(${random(255)}, ${random(255)},${random(255)}, 1)`;
}


// document.body.innerHTML += '<p>Lorem ipsum</p>';

var paragraph = document.createElement('p');
var paragraph2 = document.createElement('p');
var  newElement = document.createElement("div");// => <div></div>



newElement.classList.add('container');

paragraph.innerText = "Some text";

paragraph2.innerText = "Second paragraph"

//Push first paragraph to the div
newElement.appendChild(paragraph)

//Push second paragrpah to the div
newElement.appendChild(paragraph2)

setTimeout(()=>{
    document.body.appendChild(newElement);
},5000)





// User -> ENter the number of times you want to input values
//  -->8


//Enter the number of collegues in your class -> 8
// Enter their names -> 8 
// Every name should be in a div with h2 <div><h2>Harry Porter</h2></div>

