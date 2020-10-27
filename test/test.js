/* eslint-disable no-undef */
const obj1 = require('../lib/');
console.log('结构',obj1);
const str = '测试字,符串长，度,';
console.info('------------------------字符串方法测试------------------------');
console.info('原始字符串：',str);
console.info('长度：',obj1.default.Str.getLengthCN(str));
console.info('按照7个字节长度切割成数组：',obj1.default.Str.splitByLength(str,7));
console.info('------------------------URL测试------------------------');
const url='https://www.baidu.com/?a=123&b=456&opentime=202010271001590012';
console.info('编码前：',url);
console.info('编码后：',obj1.default.URL.Encode(url));
const encodeurl = 'https%3A%2F%2Fwww.baidu.com%2F%3Fa%3D123%26b%3D456%26opentime%3D202010271001590012';
console.info('解码前：',encodeurl);
console.info('解码后：',obj1.default.URL.Decode(encodeurl));