class ClothesBag {
  constructor(
    name,
    color,
    volume,
    handlesNum,
    pants_brand,
    pants_color,
    pants_size,
    pants_isClean,
    shirt_brand,
    shirt_color,
    shirt_size,
    shirt_isClean
  ) {
    this.name = name;
    this.color = color;
    this.volume = volume;
    this.handlesNum = handlesNum;
    this.sweatpants = {
      brand: pants_brand,
      color: pants_color,
      size: pants_size,
      isClean: pants_isClean,
    };
    this.tShirt = {
      brand: shirt_brand,
      color: shirt_color,
      size: shirt_size,
      isClean: shirt_isClean,
    };
  }
}

export default ClothesBag;
