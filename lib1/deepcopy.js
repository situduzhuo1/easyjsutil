/**
 * 深度拷贝 2020-10-22
 * @param {*} obj
 * @param {*} cache
 */
var deepCopy = function(obj, cache = []) { // 深度拷贝
  function find (list, f) {
    return list.filter(f)[ 0 ];
  }
  // just return if obj is immutable value
  // if (obj == null || typeof obj !== 'object') {
  //   return obj;
  // }
  const Constructor = obj.constructor;
  // typeof null的返回值为object，所以可以直接省略
  if (typeof obj !== 'object') {
    return obj;
  } else if (Constructor === RegExp) {
    return new Constructor(obj);
  } else if (Constructor === Date) {
    return new Constructor(obj.getTime());
  }
  // if obj is hit, it is in circular structure
  const hit = find(cache, (c) => c.original == obj);
  if (hit) {
    return hit.copy;
  }
  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  });
  Object.keys(obj).forEach((key) => {
    copy[ key ] = deepCopy(obj[ key ], cache);
  });
  return copy;
}
module.exports = deepCopy;