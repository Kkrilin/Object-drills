export function keys(obj) {
  let keyArr = [];
  for (let prop in obj) {
    keyArr.push(prop);
  }
  return keyArr;
}
