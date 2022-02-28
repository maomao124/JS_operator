/**
 * Project name(项目名称)：JS_operator
 * File name(文件名): test7
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/2/28
 * Time(创建时间)： 21:29
 * Version(版本): 1.0
 * Description(描述)： 三元运算符
 */

var a = null;  //定义变量a
typeof a != "undefined" ? a = a : a = 0;  //检测变量a是否赋值，否则设置默认值
console.log(a);  //显示变量a的值，返回null

var x = 11,
    y = 20;
x > y ? console.log("x 大于 y") : console.log("x 小于 y");  // 输出：x 小于 y