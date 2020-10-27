"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * URL转码
 * @param {url地址} url
 */
function Encode(url) {
  // URL转义为字符串
  return encodeURIComponent(url);
}

/**
 * url解码
 * @param {待解码url} encodeurl
 */
function Decode(encodeurl) {
  return decodeURIComponent(encodeurl);
}

// /**
//  * 字符串长度判断,中文算2个
//  * @param {待判断长度的字符串} str
//  */
// function StrLen(str) {
//   let len = 0;
//   for (let i = 0; i < str.length; i++) {
//     let c = str.charCodeAt(i);
//     // 单字节加1
//     if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
//       len++;
//     } else {
//       len += 2;
//     }
//   }
//   return len;
// }

exports.default = { Encode: Encode, Decode: Decode };
//# sourceMappingURL=url.js.map