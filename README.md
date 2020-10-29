# 说明
``` js
{
  Str: {
    Compare:function(a,b){},//字符串比较，兼容中文
    getLengthCN: [Function: getLengthCN],//获取字符串的字节长度
    splitByLength: [Function: splitByLength]//根据字节长度切割成字符串数组
  },
  URL: { 
      Encode: [Function: Encode], //URL编码
      Decode: [Function: Decode] //URL解码
  },
  Base: { 
      NewGuid: [Function: NewGuid] //生成GUID格式的字符串，不保证唯一
  },
  Arr: {//数组相关方法,待更新

  },
  AJAX: {//AJAX相关方法,待更新,基于asiox包二次封装

  },
  Vaild: {//数据校验相关

  },
  strCompare: [Function: Compare],//字符串比较，兼容中文
  strGetLengthCN: [Function: getLengthCN],//获取字符串的字节长度
  strSplitByLength: [Function: splitByLength],//根据字节长度切割成字符串数组
  strGetCharCodeLength: [Function: getCharCodeLength]//获取字节代码长度,输入：字节代码
  urlEncode: [Function: Decode],
  urlDeCode: [Function: Decode],
  commonNewGuid: [Function: NewGuid]
}
```
# git仓库 : https://github.com/situduzhuo1/easyjsutil.git
# 测试
``` js
node ./test/test.js
```