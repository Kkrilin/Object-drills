export function mapObject(obj, cb) {
  let transformObj = {};

  for (let prop in obj) {
    transformObj[prop] = cb(obj[prop], prop);
  }
  return transformObj;
}
