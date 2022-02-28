/**
 * Project name(项目名称)：JS_operator
 * File name(文件名): test6
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 17:40
 * Version(版本): 1.0
 * Description(描述)：
 * 逻辑运算符
 逻辑运算符通常用来组合多个表达式，逻辑运算符的运算结果是一个布尔值，只能有两种结果，不是 true 就是 false。
 */



// 运算符	名称	示例
// &&	逻辑与	x && y 表示如果 x 和 y 都为真，则为真
// ||	逻辑或	x || y 表示如果 x 或 y 有一个为真，则为真
// !	逻辑非	!x 表示如果 x 不为真，则为真

var user;  //定义变量
if (!user)
{
    console.log("变量没有赋值");
}


var n = 3;
(n == 1) && console.log(1);
(n == 2) && console.log(2);
(n == 3) && console.log(3);
(!n) && console.log("null");

var n = 3;
switch (n)
{
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("null");
}


console.log(typeof ({} && true));  //返回第二个操作数的值  true的类型：布尔型
console.log(typeof (true && {}));  //返回第二个操作数的值  {}的类型：对象

console.log(typeof ("null" && null));  //返回null的类型：对象
console.log(typeof (null && "null"));  //返回null的类型：对象

console.log(typeof ("NaN" && NaN));  //返回NaN的类型：数值
console.log(typeof (NaN && "NaN"));  //返回NaN的类型：数值

console.log(typeof ("Infinity" && Infinity));  //返回第二个操作数Infinity的类型：数值
console.log(typeof (Infinity && "Infinity"));  //返回第二个操作数"Infinity"的类型：字符串

console.log(typeof ("undefined" && undefined));  //返回undefined
console.log(typeof (undefined && "undefined"));  //返回undefined

var a = b = 2;  //定义并连续初始化
if (a)
{  //条件结果
    while (b++ < 10)
    {  //循环结构
        console.log(b++);  //循环执行语句
    }
}

var a = b = 2;  //定义并连续初始化
while (a && b++ < 10)
{
    console.log(b++);
}  //逻辑与运算符合并的多条件表达式


console.log(!{});  //如果操作数是对象，则返回false
console.log(!0);  //如果操作数是0，则返回true
console.log(!(n = 5));  //如果操作数是非零的任何数字，则返回false
console.log(!null);  //如果操作数是null，则返回true
console.log(!NaN);  //如果操作数是NaN，则返回true
console.log(!Infinity);  //如果操作数是Infinity，则返回false
console.log(!(-Infinity));  //如果操作数是-Infinity，则返回false
console.log(!undefined);  //如果操作数是undefined，则返回true


var year = 2022;
// 闰年可以被 400 整除，也可以被 4 整除，但不能被 100 整除
if ((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0)))
{
    console.log(year + " 年是闰年。");
}
else
{
    console.log(year + " 年是平年。");
}