var test = () => {
    return "test this";
};

for (let index = 0; index < 20; index++) {
    var output = document.querySelector(".output");
    var container = document.querySelector(".container").innerHTML;
    output.innerHTML += "<div class='container'>" + container + "</div>"
    
}
var scrollThis = param1 => {

    var totalHeight = param1.path[1].screen.availHeight;

    var currentScrollPosition = param1.path[1].scrollY;


    console.log('total height', totalHeight)
    console.log('current Scroll positiion', currentScrollPosition)

    if(totalHeight < currentScrollPosition){
        document.body.classList.add('red');
    } else {
        //Animating the position fixed div
        document.querySelector('.fixed').style = `top: ${currentScrollPosition}px`
        //Remove red class form the body
        document.body.classList.remove("red");

    }
};

window.onscroll = scrollThis;

