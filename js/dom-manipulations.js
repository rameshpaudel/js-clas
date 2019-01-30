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



