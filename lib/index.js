'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _str = require('./items/str');

var _str2 = _interopRequireDefault(_str);

var _url = require('./items/url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
  Str: _str2.default,
  URL: _url2.default,
  strCompare: _str2.default.Compare,
  strGetLengthCN: _str2.default.getLengthCN,
  strSplitByLength: _str2.default.splitByLength,
  strGetCharCodeLength: _str2.default.getCharCodeLength
};
exports.default = obj;
//# sourceMappingURL=index.js.map