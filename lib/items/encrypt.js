'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsBase = require('js-base64');

var _jsBase2 = _interopRequireDefault(_jsBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 加密解密方法集
 */

exports.default = {
  /**
   * API地址解码
   * @param {String} url - 待解码的URL地址
   */
  decodeAPI: function decodeAPI(url) {
    return _jsBase2.default.decode(url);
  },

  /**
   * API地址加密
   * @param {String} url - URL地址
   */
  enCodeAPI: function enCodeAPI(url) {
    return _jsBase2.default.encode(url);
  }
};
//# sourceMappingURL=encrypt.js.map