/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function addClass(selector, classToAdd) {
  const myElement = document.querySelector(selector);
  console.log(myElement.classList.add(classToAdd));
}
addClass(".head_1", "big_header");

const colorClass = function (selector, colorToAdd) {
  const myElement = document.querySelector(selector);
  myElement.style.color = colorToAdd;
};
colorClass(".head_1", "maroon");
colorClass(".head_2", "rebeccapurple");

const backgroundChange = (selector, backColor) => {
  const myElem = document.querySelector(selector);
  myElem.style.backgroundColor = backColor;
};
backgroundChange(".head_1", "gold");
backgroundChange(".head_2", "pink");
