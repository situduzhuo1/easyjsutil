import Str from './items/str';
import URL from './items/url';
import Base from './items/base';
import Arr from './items/arry';
import AJAX from './items/ajax';
import Vaild from './items/vaild';
import Number from './items/number';
import number from './items/number';

const obj= {
  Str,
  URL,
  Base,
  Arr,
  AJAX,
  Vaild,
  Number,
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
  numberFormatMoney:number.FormatMoney
};
export default obj;