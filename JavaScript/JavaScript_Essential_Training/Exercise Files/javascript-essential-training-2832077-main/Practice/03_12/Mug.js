class Mug {
  constructor(name, color, volume, capHandle, isClean, isFilled) {
    this.name = name;
    this.color = color;
    this.volume = volume;
    this.capHandle = capHandle;
    this.isClean = isClean;
    this.isFilled = isFilled;
  }
  toggleFilCup(fillStatus) {
    this.isFilled = fillStatus;
  }
}

export default Mug;
