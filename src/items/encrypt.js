import {Base64} from 'js-base64';
/**
 * 加密解密方法集
 */


export default {
  /**
   * API地址解码
   * @param {String} url - 待解码的URL地址
   */
  decodeAPI(url){
    return Base64.decode(url);
  },
  /**
   * API地址加密
   * @param {String} url - URL地址
   */
  enCodeAPI(url){
    return Base64.encode(url);
  }
};