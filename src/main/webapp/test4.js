/**
 * Project name(项目名称)：JS_operator
 * File name(文件名): test4
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 17:11
 * Version(版本): 1.0
 * Description(描述)： 无
 */


// 运算符	名称	影响
// ++x	自增运算符	将 x 加 1，然后返回 x 的值
// x++	自增运算符	返回 x 的值，然后再将 x 加 1
// --x	自减运算符	将 x 减 1，然后返回 x 的值
// x--	自减运算符	返回 x 的值，然后将 x 减 1

var x;
x = 10;
console.log(++x);  // 输出：11
console.log(x);    // 输出：11
x = 10;
console.log(x++);  // 输出：10
console.log(x);    // 输出：11
x = 10;
console.log(--x);  // 输出：9
console.log(x);    // 输出：9
x = 10;
console.log(x--);  // 输出：10
console.log(x);    // 输出：9