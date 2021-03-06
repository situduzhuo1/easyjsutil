'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _str = require('./items/str');

var _str2 = _interopRequireDefault(_str);

var _url = require('./items/url');

var _url2 = _interopRequireDefault(_url);

var _base = require('./items/base');

var _base2 = _interopRequireDefault(_base);

var _arry = require('./items/arry');

var _arry2 = _interopRequireDefault(_arry);

var _ajax = require('./items/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _vaild = require('./items/vaild');

var _vaild2 = _interopRequireDefault(_vaild);

var _number = require('./items/number');

var _number2 = _interopRequireDefault(_number);

var _encrypt = require('./items/encrypt');

var _encrypt2 = _interopRequireDefault(_encrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
  Str: _str2.default,
  URL: _url2.default,
  Base: _base2.default,
  Arr: _arry2.default,
  AJAX: _ajax2.default,
  Vaild: _vaild2.default,
  Number: _number2.default,
  encrypt: _encrypt2.default,
  //字符串处理
  strCompare: _str2.default.Compare,
  strGetLengthCN: _str2.default.getLengthCN,
  strSplitByLength: _str2.default.splitByLength,
  strGetCharCodeLength: _str2.default.getCharCodeLength,
  //URL处理
  urlEncode: _url2.default.Decode,
  urlDeCode: _url2.default.Decode,
  //公共函数
  commonNewGuid: _base2.default.NewGuid,
  //数字处理
  numberFormatMoney: _number2.default.FormatMoney,
  /**
   * 数字转大写
   * @param {Number} money - 数字,一般用户钱数转大写
   */
  numberFormatCurrency: _number2.default.convertCurrency,
  /**
   * API地址加密
   * @param {String} url - URL地址
   */
  encodeAPI: _encrypt2.default.enCodeAPI,
  /**
   * API地址解码
   * @param {String} url - 待解码的URL地址
   */
  decodeAPI: _encrypt2.default.decodeAPI
};
exports.default = obj;
//# sourceMappingURL=index.js.map