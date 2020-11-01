'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewGuid = NewGuid;
/**
 * 公共方法集
 * 原则：严谨内部任何引用
 */
function NewGuid() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
/**
 * 参数必填检查
 * @param {参数名称} param 
 */
var IsRequired = exports.IsRequired = function IsRequired(param) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';

  var msg = param + ' is required';
  if (type === 'error') {
    throw new Error(msg);
  } else {
    console.log(msg);
  }
};

exports.default = {
  NewGuid: NewGuid, IsRequired: IsRequired
};
//# sourceMappingURL=base.js.map