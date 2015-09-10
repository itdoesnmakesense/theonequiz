// ## IIFE

// 1. In the file named `IIFE.js`. 

// Write an IIFE that defines a global variable named **FruitMaker**. 
// It should contain a private array holding the following strings:
//  "apples", "bananas", "cherries", "huckleberries".
// 1. The IIFE should expose in its public interface a getter named `getFruits()`
//  that returns all fruits, and a setter named `addFruit()` 
//  that provides the ability to add a new fruit to the array.
// 1. In the file named `AugmentedIIFE.js`, 
// augment **FruitMaker** with a function named `slices()` 
// that accepts two arguments: the name of the fruit, 
// and the number of slices to make. 
// It should return an array containing the name of the fruit duplicated 
// how ever many slices was requested.

// For example: `slices("apples", 2)` should return `["apples", "apples"]`

var FruitMaker = (function(){

    var fruit = [
                  "apples",
                  "bananas",
                  "cherries",
                  "huckleberries"
                  ];
    return {
      getFruits: function(){
        return fruit;
      },
      addFruit: function(add){
        var addArray = fruit.push(add);
       return addArray;
      }
    };
  
})();


var something = FruitMaker.getFruits();
var something2 = FruitMaker.addFruit("grapes");
console.log(something);
console.log(something2);

