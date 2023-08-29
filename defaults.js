export function defaults(obj, defaultProps) {
  for (let prop in defaultProps) {
    if (obj[prop] === undefined) {
      obj[prop] = defaultProps[prop];
    }
  }
  return obj;
}
