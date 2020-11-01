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
/**
 * 参数必填检查
 * @param {参数名称} param 
 * @param {检查类别} type 
 */
export const IsRequired = function(param,type='error'){ 
  const msg = param+' is required';
  if(type==='error'){
    throw new Error(msg); 
  }else{
    console.log(msg);
  }
};

export default {
  NewGuid,IsRequired
};