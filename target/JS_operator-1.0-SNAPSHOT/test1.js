/**
 * Project name(项目名称)：JS_operator
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 17:02
 * Version(版本): 1.0
 * Description(描述)：
 */

// 运算符	描述	示例
// +	加法运算符	x + y 表示计算 x 加 y 的和
// -	减法运算符	x - y 表示计算 x 减 y 的差
// *	乘法运算符	x * y 表示计算 x 乘 y 的积
// /	除法运算符	x / y 表示计算 x 除以 y 的商
// %	取模（取余）运算符	x % y 表示计算 x 除以 y 的余数

var x = 10,
    y = 4;
console.log("x + y =", x + y);  // 输出：x + y = 14
console.log("x - y =", x - y);  // 输出：x - y = 6
console.log("x * y =", x * y);  // 输出：x * y = 40
console.log("x / y =", x / y);  // 输出：x / y = 2.5
console.log("x % y =", x % y);  // 输出：x % y = 2


var n = 5;  //定义并初始化任意一个数值
console.log(NaN + n);  //NaN与任意操作数相加，结果都是NaN
console.log(Infinity + n);  //Infinity与任意操作数相加，结果都是Infinity
console.log(Infinity + Infinity);  //Infinity与Infinity相加，结果是Infinity
console.log((-Infinity) + (-Infinity));  //负Infinity相加，结果是负Infinity
console.log((-Infinity) + Infinity);  //正负Infinity相加，结果是NaN

console.log(1 + 1);  //如果操作数都是数值，则进行相加运算
console.log(1 + "1");  //如果操作数中有一个是字符串，则进行相连运算
console.log(3.0 + 4.3 + "");  //先求和，再连接，返回"7.3"
console.log(3.0 + "" + 4.3);  //先连接，再连接，返回"34.3"
                              //3.0转换为字符串3

var n = 5;  //定义并初始化任意一个数值
console.log(NaN - n);  //NaN与任意操作数相减，结果都是NaN
console.log(Infinity - n);  //Infinity与任意操作数相减，结果都是Infinity
console.log(Infinity - Infinity);  //Infinity与Infinity相减，结果是NaN
console.log((-Infinity) - (-Infinity));  //负Infinity相减，结果是NaN
console.log((-Infinity) - Infinity);  //正负Infinity相减，结果是-Infinity

console.log(2 - "1");  //返回1
console.log(2 - "a");  //返回NaN

// 使用值减去 0，可以快速把值转换为数字。例如 HTTP 请求中查询字符串一般都是字符串型数字，
// 可以先把这些参数值减去 0 转换为数值。这与调用 parseFloat() 方法的结果相同，
// 但减法更高效、快捷。减法运算符的隐性转换如果失败，则返回 NaN，这与使用 parseFloat() 方法执行转换时的返回值是不同的。
// 例如，对于字符串“100aaa”而言，parseFloat() 方法能够解析出前面几个数字，而对于减法运算符来说，则必须是完整的数字，才可以进行转换。

console.log(parseFloat("100aaa"));  //返回100
console.log("100aaa" - 0);  //返回NaN

var n = 5;  //定义并初始化任意一个数值
console.log(NaN * n);  //NaN与任意操作数相乘，结果都是NaN
console.log(Infinity * n);  //Infinity与任意非零正数相乘，结果都是Infinity
console.log(Infinity * (-n));  //Infinity与任意非零负数相乘，结果是-Infinity
console.log(Infinity * 0);  //Infinity与0相乘，结果是NaN
console.log(Infinity * Infinity);  //Infinity与Infinity相乘，结果是Infinity

var n = 5;  //定义并初始化任意一个数值
console.log(NaN / n);  //如果一个操作数是NaN，结果都是NaN
console.log(Infinity / n);  //Infinity被任意数字除，结果是Infinity或-Infinity
                            //符号由第二个操作数的符号决定
console.log(Infinity / Infinity);  //返回NaN
console.log(n / 0);  //0除一个非无穷大的数字，结果是Infinity或-Infinity，符号由第二个操作数的符号决定
console.log(n / -0);  //返回-Infinity，解释同上

console.log(3 % 2);  //返回余数1

console.log(3.1 % 2.3);

var n = 5;  //定义并初始化任意一个数值
console.log(Infinity % n);  //返回NaN
console.log(Infinity % Infinity);  //返回NaN
console.log(n % Infinity);  //返回5
console.log(0 % n);  //返回0
console.log(0 % Infinity);  //返回0
console.log(n % 0);  //返回NaN
console.log(Infinity % 0);  //返回NaN

console.log(- 5);  //返回-5。正常数值取负数
console.log(- "5");  //返回-5。先转换字符串数字为数值类型
console.log(- "a");  //返回NaN。无法完全匹配运算，返回NaN
console.log(- Infinity);  //返回-Infinity
console.log(- (- Infinity));  //返回Infinity
console.log(- NaN);  //返回NaN

var a = b = c = 4;
console.log(a++);  //返回4，先赋值，再递增运算结果不变
console.log(++b);  //返回5，先递增，再赋值，运算结果加1
console.log(c++);  //返回4，先赋值，再递增，运算结果不变
console.log(c);  //返回5，变量的值加1
console.log(++c);  //返回6，先递增，再赋值，运算结果加1
console.log(c);  //返回6