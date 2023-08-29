import { invert } from "../invert.js";

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const tObj = { Moe: "Moses", Larry: "Louis", Curly: "Jerome" };
console.log(invert(tObj));
console.log(invert(testObject));
