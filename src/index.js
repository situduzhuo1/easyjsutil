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
  strGetLengthCN:Str.getLengthCN,
  strSplitByLength:Str.splitByLength,
  strGetCharCodeLength:Str.getCharCodeLength,
  //URL处理
  urlEncode:URL.Decode,
  urlDeCode:URL.Decode,
  //公共函数
  commonNewGuid:Base.NewGuid,
  //数字处理
  numberFormatMoney:number.FormatMoney,
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