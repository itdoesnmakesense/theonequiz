// 1. In the file named `AugmentedIIFE.js`, 
// augment **FruitMaker** with a function named `slices()` 
// that accepts two arguments: the name of the fruit, 
// and the number of slices to make. 
// It should return an array containing the name of the fruit duplicated 
// how ever many slices was requested.

// For example: `slices("apples", 2)` should return `["apples", "apples"]`



/// DIDN'T FINISH THIS AND I HATE IT SO IT'S DONE //

var FruitMaker = (function(fruit) {

  fruit.slices = function(name,num) {
  var howMany = [];
    for (var i = 0; i < howMany; i++) {
        var stuff = howMany.push(name);
      console.log(stuff);
    };
      return stuff;
  };
 
  return fruit;

})(FruitMaker);


console.log(FruitMaker);
console.log(FruitMaker.slices("orange",9));



