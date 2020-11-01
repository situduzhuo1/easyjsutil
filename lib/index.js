'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('./items/base');

var _base2 = _interopRequireDefault(_base);

var _str = require('./items/str');

var _str2 = _interopRequireDefault(_str);

var _url = require('./items/url');

var _url2 = _interopRequireDefault(_url);

var _arry = require('./items/arry');

var _arry2 = _interopRequireDefault(_arry);

var _ajax = require('./items/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _vaild = require('./items/vaild');

var _vaild2 = _interopRequireDefault(_vaild);

var _file = require('./items/file');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
  Str: _str2.default,
  URL: _url2.default,
  Base: _base2.default,
  Arr: _arry2.default,
  AJAX: _ajax2.default,
  Vaild: _vaild2.default,
  File: _file2.default,
  //公共函数
  NewGuid: _base2.default.NewGuid,
  IsRequired: _base2.default.IsRequired,
  //字符串处理
  strCompare: _str2.default.Compare,
  strGetLengthCN: _str2.default.getLengthCN,
  strSplitByLength: _str2.default.splitByLength,
  strGetCharCodeLength: _str2.default.getCharCodeLength,
  //URL处理
  urlEncode: _url2.default.Decode,
  urlDeCode: _url2.default.Decode,
  //File操作
  fileDownLoad: _file2.default.Download
};
exports.default = obj;
//# sourceMappingURL=index.js.map