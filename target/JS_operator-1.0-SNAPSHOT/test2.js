/**
 * Project name(项目名称)：JS_operator
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 17:09
 * Version(版本): 1.0
 * Description(描述)： 无
 */

//      运算符	描述	示例
//     =	最简单的赋值运算符，将运算符右侧的值赋值给运算符左侧的变量	x = 10 表示将变量 x 赋值为 10
//     +=	先进行加法运算，再将结果赋值给运算符左侧的变量	x += y 等同于 x = x + y
//     -=	先进行减法运算，再将结果赋值给运算符左侧的变量	x -= y 等同于 x = x - y
//     *=	先进行乘法运算，再将结果赋值给运算符左侧的变量	x *= y 等同于 x = x * y
//     /=	先进行除法运算，再将结果赋值给运算符左侧的变量	x /= y 等同于 x = x / y
//     %=	先进行取模运算，再将结果赋值给运算符左侧的变量	x %= y 等同于 x = x % y

var x = 10;
x += 20;
console.log(x);  // 输出：30
var x = 12,
    y = 7;
x -= y;
console.log(x);  // 输出：5
x = 5;
x *= 25;
console.log(x);  // 输出：125
x = 50;
x /= 10;
console.log(x);  // 输出：5
x = 100;
x %= 15;
console.log(x);  // 输出：10