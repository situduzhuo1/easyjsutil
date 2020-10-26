/* eslint-disable no-undef */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 深度拷贝 2020-10-22
 * @param {*} obj
 * @param {*} cache
 */
function deepCopy(obj) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // 深度拷贝
  function find(list, f) {
    return list.filter(f)[0];
  }
  // just return if obj is immutable value
  // if (obj == null || typeof obj !== 'object') {
  //   return obj;
  // }
  var Constructor = obj.constructor;
  // typeof null的返回值为object，所以可以直接省略
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return obj;
  } else if (Constructor === RegExp) {
    return new Constructor(obj);
  } else if (Constructor === Date) {
    return new Constructor(obj.getTime());
  }
  // if obj is hit, it is in circular structure
  var hit = find(cache, function(c) {
    return c.original == obj;
  });
  if (hit) {
    return hit.copy;
  }
  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function(key) {
    copy[key] = deepCopy(obj[key], cache);
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
function urlEncode(url) {
  // URL转义为字符串
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
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    // 单字节加1
    if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
}

exports.deepCopy = deepCopy;
exports.StrCompare = StrCompare;
exports.StrLen = StrLen;
exports.urlEncode = urlEncode;
exports.urlDecode = urlDecode;
//# sourceMappingURL=index.js.map