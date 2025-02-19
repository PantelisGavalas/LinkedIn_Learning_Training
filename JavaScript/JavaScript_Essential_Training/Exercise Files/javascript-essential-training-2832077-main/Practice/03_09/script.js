/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changePocketNum: function (newPockets) {
    this.pocketNum = newPockets;
  },
  dyeBackpack: function (newColor) {
    this.color = newColor;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  renameBackpack: function (newName) {
    this.name = newName;
  },
};

console.log(backpack.name);
backpack.renameBackpack("Weekend Backpack");
console.log(backpack.name);

console.log(backpack.color);
backpack.dyeBackpack("Black");
console.log(backpack.color);

console.log(backpack.volume);
backpack.changeVolume(25);
console.log(backpack.volume);

console.log(backpack.pocketNum);
backpack.changePocketNum(10);
console.log(backpack.pocketNum);
