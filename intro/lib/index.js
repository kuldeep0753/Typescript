"use strict";
//Primitive Types
const hello = "Hi I am TS";
let isLog = false;
let num = 23;
let undef = undefined;
let noNull = null;
let sym = Symbol('star');
// let big: bigint = 24n; //defined in es2020;
console.log(hello);
let arr = [1, 2, 3];
console.log(arr);
arr = [3, 2, 1, 9, 32, 6];
console.log(arr);
//Tuple
let tup = [1, ""];
console.log(tup);
tup = [23, "fg"];
console.log(tup);
// let add: Add;
let add = (a, b) => a + b;
let sum = add(2, 3);
console.log(sum);
let point2D = { x: 20, y: 30 };
let point3D = { x: 10, y: 0, z: 12 };
point2D = point3D;
console.log(point2D);
// point3D = point2D; //TODO Its wrong way to do
//Classes
class Animal {
    constructor(name) {
        this.name = name;
        console.log(name);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} km `);
    }
}
let cat = new Animal("cat");
cat.move(23);
class Bird extends Animal {
    fly(height) {
        console.log(`${this.name} moved ${height} m `);
    }
}
let parrot = new Bird("parrot");
parrot.fly(23);
//Generics
