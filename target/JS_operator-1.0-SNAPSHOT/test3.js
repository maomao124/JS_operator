/**
 * Project name(项目名称)：JS_operator
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 17:10
 * Version(版本): 1.0
 * Description(描述)：
 * 字符串运算符
 JavaScript 中的+和+=运算符除了可以进行数学运算外，还可以用来拼接字符串，其中：
 +运算符表示将运算符左右两侧的字符串拼接到一起；
 +=运算符表示先将字符串进行拼接，然后再将结果赋值给运算符左侧的变量。
 */



var x = "Hello ";
var y = "World!";
var z = x + y;
console.log(z);  // 输出：Hello World!
x += y;
console.log(x);  // 输出：Hello World!