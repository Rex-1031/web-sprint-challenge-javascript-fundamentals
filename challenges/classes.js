// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidM {
    constructor (cubAttrs) {
    this.length = cubAttrs.length;
    this.width = cubAttrs.width;
    this.height = cubAttrs.height;
}
volume () {
   this.length * this.width * this.height;
}
surfaceArea(){
    2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}





class Cuboid2 extends CuboidM{ 
    constructor (cubAttrs){
    super(cubAttrs);
    this.length = cubAttrs.length;
    this.width = cubAttrs.width;
    this.height = cubAttrs.height;
  }
}
  
  
    const cuboid2 = new Cuboid2({
        length: 4,
        width: 5,
        height: 5
    });


console.log(`==== Classes ====`)
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

