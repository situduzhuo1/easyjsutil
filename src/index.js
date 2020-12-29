import Str from './items/str';
import URL from './items/url';
import Base from './items/base';
import Arr from './items/arry';
import AJAX from './items/ajax';
import Vaild from './items/vaild';
import number from './items/number';
import encrypt from './items/encrypt';

const obj= {
  Str,
  URL,
  Base,
  Arr,
  AJAX,
  Vaild,
  Number:number,
  encrypt,
  //字符串处理
  strCompare:Str.Compare,
  /**
   * 获取字符串长度,中文算2个字符
   * @param {String} str - 字符串
   */
  strGetLengthCN:Str.getLengthCN,
  /**
   * 字符串按长度截取为数组
   * @param {String} str - 字符串
   * @param {Number} length - 截取长度
   */
  strSplitByLength:Str.splitByLength,
  strGetCharCodeLength:Str.getCharCodeLength,
  //URL处理
  urlEncode:URL.Decode,
  urlDeCode:URL.Decode,
  //公共函数
  commonNewGuid:Base.NewGuid,
  //数字处理
  numberFormatMoney:number.FormatMoney,
  /**
   * 数字转大写
   * @param {Number} money - 数字,一般用户钱数转大写
   */
  numberFormatCurrency:number.convertCurrency,
  /**
   * API地址加密
   * @param {String} url - URL地址
   */
  encodeAPI:encrypt.enCodeAPI,
  /**
   * API地址解码
   * @param {String} url - 待解码的URL地址
   */
  decodeAPI:encrypt.decodeAPI
};
export default obj;