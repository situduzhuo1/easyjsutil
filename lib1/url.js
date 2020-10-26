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

// eslint-disable-next-line no-undef
module.exports = {urlEncode,urlDecode};