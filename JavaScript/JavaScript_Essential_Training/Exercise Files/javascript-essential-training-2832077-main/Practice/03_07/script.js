/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

/*
My Cat Glass Object with Properties and a Function
*/
const cat_glass = {
  name: "Mug with cats",
  color: "white",
  volume: 0.4,
  cupHandle: true,
  isClean: true,
  isFilled: false,
  toggleFillCup: function (fillStatus) {
    this.isFilled = fillStatus;
  },
};

console.log("Cat glass Object:", cat_glass);
console.log("Cat glass name:", cat_glass.name);
console.log("Can glass volume:", cat_glass["volume"]);
var mug_color = "color";
console.log("Cat glass color:", cat_glass[mug_color]);
console.log("Can glass is filled:", cat_glass["isFilled"]);
cat_glass.toggleFillCup(true);
console.log("Can glass is filled:", cat_glass["isFilled"]);

/*
My Bag Object with Properties and Clothes Objects inside
*/
const clothes_bag = {
  name: "Bag with clothes",
  color: "white",
  volume: 15,
  handlesNum: 2,
  sweatpants: {
    brand: "Superdry",
    color: "grey",
    size: "Large",
    isClean: false,
  },
  tShirt: {
    brand: "Tommy Hilfiger",
    color: "maroon",
    size: "Large",
    isClean: false,
  },
};

console.log("Clothes Bag Object:", clothes_bag);
console.log("Clothes Bag number of handles:", clothes_bag.handlesNum);
console.log("Clothes Bag volume:", clothes_bag["volume"]);
var bag_color = "color";
console.log("Clothes Bag color:", clothes_bag[bag_color]);
console.log("Clothes Bag pants:", clothes_bag["sweatpants"]);
console.log("Bag pants brand:", clothes_bag["sweatpants"]["brand"]);
console.log("Clothes Bag shirt:", clothes_bag["tShirt"]);
console.log("Bag shirt brand:", clothes_bag["tShirt"]["brand"]);
