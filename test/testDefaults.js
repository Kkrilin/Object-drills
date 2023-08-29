import { defaults } from "../defaults.js";

// const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }

const iceCream = { flavor: "chocolate" };
console.log(
  defaults(iceCream, { color: "Brown", flavor: "vanilla", sprinkles: "lots" })
);
