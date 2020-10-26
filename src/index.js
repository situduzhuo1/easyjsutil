/**
 * 深度拷贝 2020-10-22
 * @param {*} obj
 * @param {*} cache
 */
function deepCopy(obj, cache = []) { // 深度拷贝
  function find(list, f) {
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

/**
 * 字符串比较,兼容中文
 * @param {字符串a} a
 * @param {字符串b} b
 */
function StrCompare(a, b) {
  return a.localeCompare(b, 'zh-CN');
}

/**
 * URL转码
 * @param {url地址} url
 */
function urlEncode(url) { // URL转义为字符串
  return encodeURIComponent(url);
}

/**
 * url解码
 * @param {待解码url} encodeurl
 */
function urlDecode(encodeurl) {
  return decodeURIComponent(encodeurl);
}

/**
 * 字符串长度判断,中文算2个
 * @param {待判断长度的字符串} str
 */
function StrLen(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
}

export {deepCopy, StrCompare, StrLen, urlEncode, urlDecode };
