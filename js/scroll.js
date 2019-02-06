for (let index = 0; index < 20; index++) {
    var output = document.querySelector(".output");
    var container = document.querySelector(".container").innerHTML;
    output.innerHTML += "<div class='container'>" + container + "</div>";
}

var scrollThis = param1 => {
    // console.log('Scroll Event', param1.path[1].scrollY)
    // console.log('Window object', param1.path[1].scrollY) 
    var totalHeight = param1.path[1].innerHeight;

    var currentScrollPosition = param1.path[1].scrollY;

    // console.log('outer height', param1.path[1].outerHeight)
    // console.log('total height', totalHeight)
    // console.log('current Scroll positiion', currentScrollPosition)

    if (totalHeight < currentScroll -Position) {
        document.body.classList.add("red");
    } else {
        //Animating the position fixed div
        document.querySelector(
            ".fixed"
        ).style = `top: ${currentScrollPosition}px; left: ${currentScrollPosition /
            5}px`;
        //Remove red class form the body
        document.body.classList.remove("red");
    }
};

window.onscroll = scrollThis;




var backToTop = document.querySelector("#to-top");
var input = document.querySelector("#input-text");

var onKeyPress = function(event){
    if (event.keyCode == 13){
        clickedOnTop();
    }
    console.log('event', event);
    console.log('timestamp', event.timeStamp);
    console.log('key pressed', event.keyCode);
    console.log('key location', event['location']);
}

input.addEventListener('keyup',onKeyPress);

window.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        alert('Enter button pressed on window')
    }
});


const clickedOnTop = function() {
    window.scrollTo(0, 100);
};


//Directly adding the event listener
backToTop.onclick = clickedOnTop;

//Manually adding the event listener
backToTop.addEventListener("click", clickedOnTop);



    // console.log('total height', totalHeight)
    // console.log('current Scroll positiion', currentScrollPosition)
const resizeWindow = (event)=>{
    //Getting the outer height attribute from the window object
    var windowHeight = event.path[0].outerHeight;
    if(windowHeight > 500){
        document.body.style = "background:#ededed; border:10px solid yellow"
        //Do stuff here 
        console.log( 'the height is more than 100')
    }else{
        document.body.style = "background:red; border:none"
    
    }
    console.log('resized innerHeight', event.path[0].innerHeight)
    console.log('resized outerHeight', )
}

window.addEventListener('resize', resizeWindow  )

