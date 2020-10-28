import Str from './items/str';
import URL from './items/url';
import Common from './items/common';
import Arr from './items/arry';
import AJAX from './items/ajax';
import Vaild from './items/vaild';

const obj= {
  Str,
  URL,
  Common,
  Arr,
  AJAX,
  Vaild,
  //字符串处理
  strCompare:Str.Compare,
  strGetLengthCN:Str.getLengthCN,
  strSplitByLength:Str.splitByLength,
  strGetCharCodeLength:Str.getCharCodeLength,
  //URL处理
  urlEncode:URL.Decode,
  urlDeCode:URL.Decode,
  //公共函数
  commonNewGuid:Common.NewGuid
};
export default obj;