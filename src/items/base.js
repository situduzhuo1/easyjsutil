/**
 * 公共方法集
 * 原则：严谨内部任何引用
 */
export function NewGuid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}
export default {
  NewGuid
};