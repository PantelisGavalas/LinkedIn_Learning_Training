/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Mug from "./Mug.js";
import ClothesBag from "./ClothesBag.js";
import Backpack from "./Backpack.js";

const cat_mug = new Mug("Cat Mug", "white", 0.4, true, true, false);
console.log("My cat mug:", cat_mug);
console.log("My cat mug is clean:", cat_mug.isClean);

const black_mug = new Mug("Black Mug", "black", 0.45, true, false, false);
console.log("My plane black mug:", black_mug);
console.log("My plane black mug volume:", black_mug.volume);

const superbag = new ClothesBag(
  "Supermarket clothes bag",
  "white",
  20,
  2,
  "Superdry",
  "Grey",
  "Large",
  false,
  "Tommy Hilfiger",
  "Maroon",
  "Large",
  false
);
console.log("My supermarket clothes bag:", superbag);
console.log("My swatpants brand in my clothes bag:", superbag.sweatpants.brand);
console.log("My t-shirt color in my clothes bag:", superbag.tShirt.color);

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value for everydayPack:", everydayPack.pocketNum);

const weekendPack = new Backpack(
  "Weekend Backpack",
  25,
  "black",
  10,
  20,
  20,
  false
);

console.log("The weekendPack object:", weekendPack);
console.log("The pocketNum value for weekendPack:", weekendPack.pocketNum);
