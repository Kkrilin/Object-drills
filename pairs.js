export function pair(obj) {
  let pairArr = [];
  for (let prop in obj) {
    pairArr.push([prop, obj[prop]]);
  }
  return pairArr;
}
