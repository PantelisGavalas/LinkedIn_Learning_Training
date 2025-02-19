/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

/* 
Set events for entire grid block.
*/
const container = document.querySelector(".grid");
//console.log(container);
container.addEventListener("mouseenter", () => {
  //console.log(container.style);
  container.style.border = "10px solid maroon";
});
container.addEventListener("mouseleave", () => {
  container.style.border = "";
});

/* 
Set events for each grid item.
*/
const cells = document.querySelectorAll(".cell");
//console.log(cells);
cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    //console.log(cell.style);
    cell.style.backgroundColor = "#778899";
  });
  cell.addEventListener("mouseleave", () => {
    cell.style.backgroundColor = "";
  });
  cell.addEventListener("click", () => {
    cell.classList.toggle("clicked");
  });
});

/*
Set background color for entire window on keydown.
*/
const body = document.querySelector("body");
body.addEventListener("keydown", () => {
  body.style.backgroundColor = "#FFEBCD";
});
body.addEventListener("keyup", () => {
  body.style.backgroundColor = "";
});
