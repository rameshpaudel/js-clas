
//Representation of data

// var product = {
//     title: "Laptop ",
    
//     model: "L5E",
    
//     madeYear: 2010,
    
//     usedPeriod : '2 years',

//     showId: function(){
//         return `${this.title}  ${this.model}`;
//     }

// };


// var person = {
//     firstName : "Harry",
//     lastName : "Porter",
 
//     greet: function(firstName, lastName){
//         if(firstName){
//             this.firstName = firstName
//         }
//         if(lastName){
//             this.lastName = lastName
//         }
//         return 'Hello Everyone this is '+ this.fullName()
//     }
// }


// var list = {
//     user: 'Username',
//     addedTime: new Date(),
//     isCompleted: false,

//     toggleStatus: function(){
//         if(this.isCompleted){
//             this.isCompleted = false
//             return;
//         } 
//         this.isCompleted = true
//     }
// }
// person.greet();


// 3 product objects

// click => add to cart

//Show the output in html



//Objects  

// this cart has:

// Product 1 - modelNo
// product 2
// product 3

function addToCart(itemNumber){
    var product1 = {
        title: "Test",
        made: 2019,
        model: "FY-0"
    };
    
    var product2 = {
        title: "Another",
        made: 2016,
        model: "FN-0"
    };
    
    var product3 = {
        title: "Yet Another",
        made: 2012,
        model: "F-0"
    };
    
    var cart = [];

    var products = [
      product1,
      product2,
      product3  
    ];
    

    cart.push( products[itemNumber] );

    for (let index = 0; index < cart.length; index++) {
        //Get cart data from position
        const element = cart[index];


        
        console.log(`Element No ${index}`, element);

        // Select output class and replace the html
        document.getElementsByClassName('output')[0].innerHTML 
        += ` The title is${element.title} <br/>`
    }
}


var person = {
    firstName :"John",
    lastName: 'Doe'
}



