
//vanilla_output
var element = document.getElementById("vanilla_output");
element.innerHTML = "This content generated with vanilla JavaScript!";

//jquery_ouput
var jqueryOutput = $("#jquery_ouput");
jqueryOutput.append("<p>This content generated with jQuery</p>");

// > In `main.js` do the following:
// 1. Write a function named `modulus` that takes two arguments. 
// The function should use the modulo operator to return the remainder 
//   between the first and second arguments. 
//  e.g. `modulus(10, 3) // Should return 1`.

var modulus = function(arg1,arg2){
    var remainder = arg1%arg2; 
    console.log(remainder)
  }
  modulus(10,3);


// 1. Write a function named `doMath`. This function takes three arguments.  
// The first two will contain integer values. 
// The third argument will be a function reference. 
// Write two more functions named `add` and `subtract`.
// Execute the `doMath` function to add two numbers together. 
// Then execute the `doMath` function to subtract the two numbers.

var doMath = function(arg1,arg2,call){
  console.log(add(arg1,arg2));
  console.log(sub(arg1,arg2));
}
var add = function(arg1,arg2){
  return arg1+arg2
}
var sub = function(arg1,arg2){
  return arg1-arg2 
}
  doMath(10,4);

//   ## Arrays

// > In the `main.js`, I started you off with a simple array.
var Planets = ["Mercury", 
                "Venus", 
                "Earth", 
                "Mars", 
                "Jupiter", 
                "Saturn", 
                "Uranus", 
                "Neptune"
                ];

// 1. Write a function named `sortedPlanets` that returns 
// an array of the planet names sorted alphabetically.
// var alpha = Planets.sort();
//   console.log(alpha);
function sortedPlanets(){
  var alpha = Planets.sort();
  console.log(alpha);
}
sortedPlanets();




// 1. Write a function named `reversedPlanets` that returns 
// an array of planet names that are reversed (i.e. "htraE").

  function reversedPlanets(){
    var reverse = Planets.join().split('').reverse().join('');
        console.log(reverse);
    }
reversedPlanets();


// 1. Write a function named `longPlanets` that returns 
// an array containing only the planet names that are 7 characters long, or longer.

function longPlanets(Planets) {
  if (Planets.length >= 7) {
    return Planets;
  }
}
var newArray = Planets.filter(longPlanets);
console.log(newArray); 


//## XHR

// 1. Write a function named `getAnimals` that uses the jQuery `ajax` method 
//     to retrieve the `data/animals.json` file. 
//     When you execute the functions, it should just log *just the array* 
//     of animals to the console when the async is complete. 
//     Make sure you provide a prompt of "animals" when logging the array.




 function getAnimals(){
   return  $.ajax({
              url:"../data/animals.json"
            })
            .done(function(data) {
                console.log(data);
              });

           return getAnimals();
          }
getAnimals();






