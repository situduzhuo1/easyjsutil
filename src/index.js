import Base from './items/base';
import Str from './items/str';
import URL from './items/url';
import Arr from './items/arry';
import AJAX from './items/ajax';
import Vaild from './items/vaild';
import File from './items/file';

const obj= {
  Str,
  URL,
  Base,
  Arr,
  AJAX,
  Vaild,
  File,
  //公共函数
  NewGuid:Base.NewGuid,
  IsRequired:Base.IsRequired,
  //字符串处理
  strCompare:Str.Compare,
  strGetLengthCN:Str.getLengthCN,
  strSplitByLength:Str.splitByLength,
  strGetCharCodeLength:Str.getCharCodeLength,
  //URL处理
  urlEncode:URL.Decode,
  urlDeCode:URL.Decode,
  //File操作
  fileDownLoad:File.Download
};
export default obj;