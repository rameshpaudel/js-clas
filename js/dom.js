var container = document.getElementsByClassName('container');




// console.log(`------------container`);
// console.log(container);

//returns array


// console.log(`First container text data
//  ${container[0].innerText}`);
// console.log(`First container html data 
// ${container[0].innerHTML}`);


// console.log(`Get Children of first container ${container[0].children}`, 
//     container[0].children);



// var button = document.getElementById('btn');
// button.onclick = function(event){
//     alert('Clicked');
// };


// border: 1px solid color;


// document.getElementById()
// var secondElement = document.getElementById()

// To get the children

// object.children

// // to get inside text of an element

// object.innerText

// // to get inside HTML

// object.innerHTML





// ===========================================
// Timer functions
// ===========================================
// Run the code in given interval of time
// setInterval(function(){
//     //Code will go here
// },500);

// //500 => run 
// setTimeout(function(){
// alert("THis is alert from timeout")
// }, 500);



var interval = setInterval(function(){
    changeBackground(document.body);
    var stop = clearInterval(interval);
},2000);



