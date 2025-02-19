/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

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
