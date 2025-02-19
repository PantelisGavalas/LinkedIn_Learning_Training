/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

let a = 5;
let b = "5";

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

/* 
== : Loose comparison. Type conversion first if necessary => 5 == "5" --> True
=== : Absolute equivalence test. NO Type conversion => 5 == "5" --> False
*/
if (a == b) {
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}
