/**
 * Project name(项目名称)：JS_operator
 * File name(文件名): test5
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 17:14
 * Version(版本): 1.0
 * Description(描述)： 无
 */


// 运算符	名称	示例
// ==	等于	x == y 表示如果 x 等于 y，则为真
// ===	全等	x === y 表示如果 x 等于 y，并且 x 和 y 的类型也相同，则为真
// !=	不相等	x != y 表示如果 x 不等于 y，则为真
// !==	不全等	x !== y 表示如果 x 不等于 y，或者 x 和 y 的类型不同，则为真
// <	小于	x < y 表示如果 x 小于 y，则为真
// >	大于	x > y 表示如果 x 大于 y，则为真
// >=	大于或等于	x >= y 表示如果 x 大于或等于 y，则为真
// <=	小于或等于	x <= y 表示如果 x 小于或等于 y，则为真

var x = 25;
var y = 35;
var z = "25";
console.log(x == z);  // 输出： true
console.log(x === z); // 输出： false
console.log(x != y);  // 输出： true
console.log(x !== z); // 输出： true
console.log(x < y);   // 输出： true
console.log(x > y);   // 输出： false
console.log(x <= y);  // 输出： true
console.log(x >= y);  // 输出： false

// 大小关系运算符
// 大小运算符	说明
// <	如果第一个操作数小于第二个操作数，则返回true；否则返回 false
// <=	如果第一个操作数小于或等于第二个操作数，则返回true；否则返回 false
// >=	如果第一个操作数大于或等于第二个操作数，则返回true；否则返回 false
// >	如果第一个操作数大于第二个操作数，则返回true；否则返回 false

console.log( 4 > 3 );
console.log("4" > Infinity );

console.log("4" >"3");
console.log("a" > "b");
console.log("ab" >"cb");
console.log("abd" > "abc");

console.log("a" >"3");
console.log("a" > 3);


// 如果操作数是布尔值，则先转换为数值，其中 false 转为 0，true 转换为 1。
// 如果一个操作数是字符串，另一个操作数是数字，则先尝试把字符串转换为数字。
// 如果一个操作数是字符串，另一个操作数是对象，则先尝试把对象转换为字符串。
// 如果一个操作数是数字，另一个操作数是对象，则先尝试把对象转换为数字。
// 如果两个操作数都是对象，则比较引用地址。如果引用地址相同，则相等；否则不等。

console.log("1" == 1);  //返回true。字符串被转换为数字
console.log(true == 1);  //返回true。true被转换为1
console.log(false == 0);  //返回true。false被转换为0
console.log(null == 0);  //返回false
console.log(undefined == 0);  //返回false
console.log(undefined == null);  //返回true
console.log(NaN == "NaN");  //返回false
console.log(NaN ==1);  //返回false
console.log(NaN == NaN);  //返回false
console.log(NaN != NaN);  //返回true

var a = "abc" + "d";
var b = "a" + "bcd";
console.log(a == b);  //返回true

// 如果两个操作数都是简单的值，则只要值相等，类型相同，就全等。
// 如果一个操作数是简单的值，另一个操作数是复合型对象，则不全等。
// 如果两个操作数都是复合型对象，则比较引用地址是否相同。

console.log(null === undefined);  //返回false
console.log(0 === "0");  //返回false
console.log(0 === false);  //返回false

var a = {};
var b = a;
console.log(a === b);  //返回true

var a = {};
var b = {};
console.log(a === b);  //返回false

var a = new String("abcd");  //定义字符串“abcd”对象
var b = new String("abcd");  //定义字符串“abcd”对象
console.log(a === b);  //返回false
console.log(a == b);  //返回false

var a = "1" + 1;
var b = "11";
console.log(a ===b);  //返回true

var a = 1;
var b = 2;
console.log((a > b || a == b) == (a >= b));  //返回true，此时似乎相等

var a = null;
var b = undefined;
console.log((a > b || a == b) == (a >= b));  //返回false，表达式的值并非相等
