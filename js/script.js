//Number()
//String()
//Boolean()

// var firstName = "Harry";
// var age = 20;
// var male = true;
// var lastName = "Doe";

// var someVar = "ksjfkljsdklf";

// console.log(firstName);
// console.warn(lastName);
// console.error(male);

// var stringAge = String(age);
// var numberAge = Number(stringAge);
// console.log(numberAge);

// add(1,2)
// var oldSomeText = 'Thsi afklsjfklasdjfkla sdjfkl'+ add(1, 3) + 'klasdjfklasjdfkl';
// var someText = `Thsi afklsjfklasdjfkla ${multiply(2,3)} sdjfkl ${add(1, 3)} klasdjfklasjdfkl `;
// alert(someText);

// if(add(1,2) > add(0,1)){
//     console.log('This is true'  );
// }

// var firstNumber = parseInt(prompt("Enter first Number"));
// var secondNumber = parseInt(prompt("Enter second Number"));

// alert (`The sum is  ${add(firstNumber, secondNumber)} and the multiplication is ${multiply(firstNumber,secondNumber)}`);

// var firstNumber = parseInt(prompt("Enter first Number"));
// var secondNumber = parseInt(prompt("Enter second Number"));

// var nameArray = [
//     "John",
//     "Jane",
//     "Harry",
//     "Ram",
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     [1, 2, 3, 4, 5]
// ];

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}


var getPosition = function(month, monthNumber) {
    if (monthNumber > month.length) {
        return;
    }

    return month[monthNumber - 1];
};



function sum(a,b){
    return a+b;
}


var arrowGetPosition = (month, monthNumber)=>{
    if (monthNumber > month.length) {
        return;
    }

    return month[monthNumber - 1];
}


var getMonth = function(monthNumber) {
    var month = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];
    return arrowGetPosition(month, monthNumber);
};

var monthAlert = function(monthNumber) {
    var monthName = getMonth(monthNumber);
    if (monthName) {
        alert(`The month is ${monthName}`);
    } else {
        alert("Please input the correct data");
    }
};

// arrayToConsole
var arrayToConsole = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        console.log(`index: ${index} and the value is : ${arr[index]}`);
    }
}

var sumOfNumbers = function(array){
    let index = 0;
    var sum = 0;
    while (index < array.length){
        sum = sum + array[index];
        index++;
    }
    return sum;
}

var askMultipleTime = function (nosOfItems){
    var data = [];
    for (let index = 0; index < nosOfItems; index++) {
        var userInput = parseInt(prompt("Enter a number"));
        if (isNaN(userInput)) {
            alert("That's not a number is it??")
            return;
        }
        data.push(userInput);
    }
    return data;
}


var askForInputTime = function(){
    var nosOfItems = parseInt(prompt("Enter the number of items"));
    var data = askMultipleTime(nosOfItems);
    return sumOfNumbers(data);
}


var random = function(limit, type = 'upper'){
    if(type === 'lower'){
        return Math.floor(Math.random() * limit);
    }
    return Math.ceil(Math.random() * limit);
}
// Ask user for number of input required
// Loop and ask as per the input
// 

//Calculate the area of circle based on radius
// Calculate area of triangle

// arrayToConsole([1,2,4,6,7,"test"] );


// console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]) );






//  index is 0 and the value is 1
//  index is 1 and the value is 2



// Dynamically check the length of array and return output of the position

// var userInput = parseInt(prompt("Enter a month number"));
// monthAlert(userInput);

// var secondUserInput = parseInt(prompt("Enter a next month number"));
// monthAlert(secondUserInput);

// alert(`The input is ${monthNumber} which is the month of ${month[monthNumber -1]}`);


//


var changeBackground = function (element) {
    element.style = `background: rgba(${random(255)}, ${random(255)}, ${random(255), Math.random()})`
}

var arr = [1,2,3,4,5,6];


// Event

//document -> DOM 

// document.title 


