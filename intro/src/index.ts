//Primitive Types
const hello: string = "Hi I am TS";
let isLog: boolean = false;
let num: number = 23;
let undef: undefined = undefined;
let noNull: null = null;
let sym: symbol = Symbol('star');
// let big: bigint = 24n; //defined in es2020;

console.log(hello);

let arr: number[] = [1, 2, 3];
console.log(arr);
arr = [3, 2, 1, 9, 32, 6];
console.log(arr);

//Tuple
let tup: [number, string] = [1, ""];
console.log(tup);
tup = [23, "fg"];
console.log(tup);

//FUnction
type Add = (a: number, b: number) => number;
// let add: Add;

let add: Add = (a, b) => a + b;
let sum = add(2, 3);
console.log(sum);

//Structural Typing/DUck typing
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 20, y: 30 };
let point3D: Point3D = { x: 10, y: 0, z: 12 };

point2D = point3D;
console.log(point2D);
// point3D = point2D; //TODO Its wrong way to do

//Classes
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
    console.log(name);
  }

  public move(distance: number): void {
    console.log(`${this.name} moved ${distance} km `);
  }
}
let cat = new Animal("cat");
cat.move(23);

class Bird extends Animal {
  fly(height: number): void {
    console.log(`${this.name} moved ${height} m `);
  }
}

let parrot = new Bird("parrot");
parrot.fly(23);


//Generics
