// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single
// Responsibility.
// Technologies: JavaScript, HTML, CSS, Bootstrap
// Features:
// (5 points): As a developer, I want to make good, consistent commits.
// (5 points): As a user, I want a destination to be randomly selected for my day trip.
// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.
// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of
// transportation, and/or form of entertainment if I don’t like one or more of those things.
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the
// random selections.
// (10 points): As a user, I want to display my completed trip in the console.
// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each
// function should do just one thing!
// Research:
// How to generate a random number in JavaScript
// let userInput = "no";
// while(userInput === "no"){
 
// let destinations = ['Madison', 'California', 'Kansas', 'New York'];
// let restaurants = ['Mcdonalds', 'Olive Garden', 'Burger King', 'Wendys'];
// let transportations = ['Bus', 'Car', 'Train', 'Plane'];
// let entertainments = ['Lasertag', 'Arcade', 'Brewery Tour', 'Movies'];

// alert("heres your trip itinerary");
// let sumNumber = Math.floor(Math.random() * 4);

// console.log("your destination will be "  +  destinations[sumNumber] + '');
// console.log("your restuarant will be " + restaurants[sumNumber] + '');
// console.log("your transportation will be "  + transportations[sumNumber] + '');
// console.log("your entertainment will be " + entertainments[sumNumber] + '');

// console.log(sumNumber);


// userInput = prompt("do you like this trip?");

// if (userInput === "yes"){
//     alert("great, have fun!");
// }
//  else if (userInput === "no"){
//     alert("Nope, try again!");
//  }
// }
let destinations = ['Chicago', 'Los Angeles', 'las Vegas', 'New York', 'Miami'];
let restaurants = ['Steak House', 'Italian', 'Sushi', 'Gastropub', 'Thai'];
let transportations = ['Bus', 'Car', 'Train', 'Plane', 'Carpool'];
let entertainments = ['Lasertag', 'Arcade', 'Brewery Tour', 'Movies', 'Shopping'];

let userInput = "no";
while(userInput === "no"){
userInput = prompt("Do you like this trip?");


let sumNumber = Math.floor(Math.random() * 5);
console.log(sumNumber);
function tripOptions() {
if (userInput === "yes"){
    alert("great, have fun!");
}
 else if (userInput === "no"){
    alert("Nope, try again!");
 }
}
tripOptions();
function displayTrip() {

    console.log("your destination will be "  +  destinations[sumNumber] + '');
    console.log("your restuarant will be " + restaurants[sumNumber] + '');
    console.log("your transportation will be "  + transportations[sumNumber] + '');
    console.log("your entertainment will be " + entertainments[sumNumber] + '');
    console.log("your planned day trip will be " + myTrip[sumNumber] + '' );
    console.lo(sumNumber);
}
}