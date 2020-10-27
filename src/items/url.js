/**
 * URL转码
 * @param {url地址} url
 */
function Encode(url) { // URL转义为字符串
  return encodeURIComponent(url);
}

/**
 * url解码
 * @param {待解码url} encodeurl
 */
function Decode(encodeurl) {
  return decodeURIComponent(encodeurl);
}

export default { Encode,Decode };
