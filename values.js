export function values(obj) {
  let valueArr = [];
  for (let prop in obj) {
    valueArr.push(obj[prop]);
  }
  return valueArr;
}
