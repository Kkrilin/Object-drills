import { mapObject } from "../mapObject.js";

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

console.log(mapObject(testObject, (value, key) => value + "," + key));
