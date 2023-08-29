export function invert(obj) {
  let invertObj = {};
  for (let prop in obj) {
    invertObj[obj[prop]] = prop;
  }
  console.log(obj);
  return invertObj;
}
