'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewGuid = NewGuid;
/**
 * 公共方法集
 */
function NewGuid() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
exports.default = {
  NewGuid: NewGuid
};
//# sourceMappingURL=common.js.map