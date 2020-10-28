'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _str = require('./items/str');

var _str2 = _interopRequireDefault(_str);

var _url = require('./items/url');

var _url2 = _interopRequireDefault(_url);

var _common = require('./items/common');

var _common2 = _interopRequireDefault(_common);

var _arry = require('./items/arry');

var _arry2 = _interopRequireDefault(_arry);

var _ajax = require('./items/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _vaild = require('./items/vaild');

var _vaild2 = _interopRequireDefault(_vaild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
  Str: _str2.default,
  URL: _url2.default,
  Common: _common2.default,
  Arr: _arry2.default,
  AJAX: _ajax2.default,
  Vaild: _vaild2.default,
  //字符串处理
  strCompare: _str2.default.Compare,
  strGetLengthCN: _str2.default.getLengthCN,
  strSplitByLength: _str2.default.splitByLength,
  strGetCharCodeLength: _str2.default.getCharCodeLength,
  //URL处理
  urlEncode: _url2.default.Decode,
  urlDeCode: _url2.default.Decode,
  //公共函数
  commonNewGuid: _common2.default.NewGuid
};
exports.default = obj;
//# sourceMappingURL=index.js.map