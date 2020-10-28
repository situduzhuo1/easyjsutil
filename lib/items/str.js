'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 字符串比较,兼容中文
 * @param {字符串a} a
 * @param {字符串b} b
 */
function Compare(a, b) {
  return a.localeCompare(b, 'zh-CN');
}
/**
 * 获取字节长度
 * @param {字节编码} c 
 */
function getCharCodeLength(c) {
  var len = 0;
  if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
    len++;
  } else {
    len += 2;
  }
  return len;
}

/**
 * 字符串长度判断,中文算2个
 * @param {待判断长度的字符串} str
 */
function getLengthCN(str) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    len += getCharCodeLength(c);
  }
  return len;
}

/**
 * 字符串长度判断,中文算2个
 * @param {待判断长度的字符串} str
 */
function splitByLength(str, length) {
  var info = {
    strlen: 0,
    index: 0,
    result: ['']
  };
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    info.strlen += getCharCodeLength(c);
    if (info.strlen <= length) {
      info.result[info.index] += str[i];
    } else {
      info.index++;
      info.strlen = getCharCodeLength(c);
      info.result.push(str[i]);
    }
  }
  return info.result;
}
//export const Str = ;
exports.default = { Compare: Compare, getLengthCN: getLengthCN, splitByLength: splitByLength, getCharCodeLength: getCharCodeLength };
//# sourceMappingURL=str.js.map