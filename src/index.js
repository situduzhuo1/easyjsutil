import Str from './items/str';
import URL from './items/url';

const obj= {
  Str,
  URL,
  strCompare:Str.Compare,
  strGetLengthCN:Str.getLengthCN,
  strSplitByLength:Str.splitByLength,
  strGetCharCodeLength:Str.getCharCodeLength
};
export default obj;