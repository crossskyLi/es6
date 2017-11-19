$(function () {

    //var a  =[];
    //for(var i = 0; i <10;i++){
    //    a[i]= function(){
    //        console.log(i)
    //    }
    //}
    //a[5]();
    // var a  =[];
    //for(let i = 0; i <10;i++){
    //    a[i]= function(){
    //        var test = $('.test')
    //        var html = test.html();
    //        test.html(html+i+b);
    //    };
    //    a[i]();
    //}
    //不存在变量提升,var 提升后,没有赋值,为undefined;
    //let b = 10 ;
    //var b = 110;

    //--------------暂时性死区-------------------
    //var tmp = 123;
//存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，
// 导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
// 在代码块内，使用let命令声明变量之前，该变量都是不可用的。
// 这在语法上，称为“暂时性死区”
//
//    if (true) {
//        tmp = 'abc'; // ReferenceError
//        console.log(tmp)
//        let tmp = '11';
//        console.log(tmp)
//    }
//    console.log(tmp)


    //在let命令声明变量tmp之前，都属于变量tmp的“死区”。
    //if (true){
    //    tmp = true;
    //    console.log(tmp)
    //    let tmp = 1;
    //    console.log(tmp)
    //}
    //“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
    // 如果变量未被声明则不会报错,变量会为undefined;
    // 但是如果有let声明,并且存在死区,那么就会跑出ReferenceError
    //console.log(typeof x) ;
    //let x= 1;
    //console.log(y);


    /*-------------------------------------------------------*/
//----------不允许重复声明
    //let a = '12';//不允许
    //function a(){
    //    let a = '12';
    //    console.log(a)
    //}
    //console.log(a)
    //function b(){
    //    let a = '12';
    //    console.log(a)
    //};
    //函数传参也是不允许的
    //function c (a){
    //    let a = 111
    //}
    //a();
    //b();
    //c();


    /*-------------------------------------------------------*/
    //-----------------块级作用域-------------------
    //function f1() {
    //    let n = 5;
    //    //var n = 5;
    //    //for、if中的 let 声明存在块级作用域结果为5,var则可以取到,就是10
    //    if (true) {
    //        let n = 10;
    //        //var n = 10;
    //    }
    //    console.log(n); // 5
    //}
    //f1();


    //---------------------- const 声明 ----------------------------------

    //const
    // 静态声明,不可改,不可重复声明
    // ,存在暂时死区,
    // 不存在变量提升,
    // 只在声明所在块级作用域内有效
    //const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
    //const foo = {};
    //foo.aa = '123';//可以更改它的属性,它指向的数据结构是不是可变的，就完全不能控制了
    //console.log(foo)
    //const a = [];
    //a.push('Hello'); // 可执行
    //a.length = 0;    // 可执行
    //a = ['Dave'];    // 将另外一个数组赋值给 a, 相当于改变指针,就会报错


    //--------------冻结对象--------------
    //如果真的想将对象冻结，应该使用Object.freeze方法
    //冻结一个对象
    //const aa = {aa:'123'};
    ////const foo = Object.freeze(aa);
    ////foo.prop = 123;//常规模式不起作用,但严格模式报错
    //
    ////彻底冻结一个对象
    //var constantize = (obj) => {
    //    Object.freeze(obj);
    //    Object.keys(obj).forEach( (key, i) => {
    //        if ( typeof obj[key] === 'object' ) {
    //            constantize( obj[key] );
    //        }
    //    });
    //};
    //constantize(aa);
    //aa.bb = 11;
    //console.log(aa);

    //在浏览器环境指的是window对象，在Node指的是global对象
    //ES5 只有两种声明变量的方法：var命令和function命令。
    // ES6除了添加let和const命令，后面章节还会提到，
    // 另外两种声明变量的方法：import命令和class命令。

    //浏览器和 Web Worker 里面，self也指向顶层对象
    /*----------------------------------------------------------------*/

//  取到顶层对象。下面是两种勉强可以使用的方法。
// 方法一
//    var a = (typeof window !== 'undefined' ? window : (typeof process === 'object' && typeof require === 'function' && typeof global === 'object') ? global : this);
//
//// 方法二
//    var getGlobal = function () {
//        if (typeof self !== 'undefined') {
//            return self;
//        }
//        if (typeof window !== 'undefined') {
//            return window;
//        }
//        if (typeof global !== 'undefined') {
//            return global;
//        }
//        throw new Error('unable to locate global object');
//    };
//console.log(a,getGlobal())
    /*---------------------------------------------------------------------*/


    /*-----------------------------  变量的解构赋值  ----------------------------------------*/
    //模式匹配写法;

    //var b = [];
    //var c = 5;
    ////let arr = [a, [b], c] = [1, [2], 3];// 对 b 加了方括号,则模式不匹配,b会被重新赋值,更改类型;
    //let arr = [a, b, c] = [1, [2], {}]; // 不加方括号,则模式匹配,b会被重新赋值,但类型不变;
    //console.log(a);
    //console.log(b);
    //console.log(c);
    ////var b = 10;
    //console.log(arr);
    //console.log(Array.isArray(b));//加了方括号 false, 不加方括号 true

    //let [ , , third] = ["foo", "bar", "baz"];

    //解构数组
    //let [head, ...tail] = [1, 2, 3, 4]; // "baz"
    //console.log(head);
    //console.log(tail);

    //let [x, y, ...z] = ['a'];
    //console.log(x, y, z);
    //x // "a"
    //y // undefined
    //z // []
    //如果解构不成功，变量的值就等于undefined。


    //如果等号的右边不是数组或者严格地说，不是可遍历的结构，那么将会报错。
    // 报错
    //let [foo] = 1;
    //let [foo] = false;
    //let [foo] = NaN;
    //let [foo] = undefined;
    //let [foo] = null;
    //let [foo] = {};


    //
    //function* fibs() {
    //    let a = 0;
    //    let b = 1;
    //    while (true) {
    //        console.log('while',a)
    //        yield a;
    //
    //        [a, b] = [b, a + b];
    //    }
    //
    //}
    //
    //let [first, second, third, fourth, fifth, sixth] = fibs();
    //console.log(first); // 0
    //console.log(second); // 1
    //console.log(third); // 1
    //console.log(fourth); // 2
    //console.log(fifth); // 3
    //console.log(sixth);// 5


//    function *gen() {
//        yield 'hello';
//        yield 'world';
//        return true;
//    }
//    //以上代码定义了一个简单的 generator，看起来就像一个普通的函数，区别是function关键字后面有个*号，函数体内可以使用yield语句进行流程控制。
//
//var iter = gen();
//    var a = iter.next();//跑第一步,到hello后,停止,返回hello;
//    console.log(a); // {value:'hello', done:false}
//    var b = iter.next();//跑第二步,到world后,停止,world;
//    console.log(b); // {value:'world', done:false}
//    var c = iter.next();//跑第三步,true,停止,true;
//    console.log(c); // {value:true, done:true}
//    var d = iter.next();//之后返回都是undefined;
//    var e = iter.next();
//    console.log(d,e)


//-------------------默认值--------------------------------
//解构赋值允许指定默认值。
//    let [foo = 1]= [];//没有则取默认值
//    console.log(foo)
//    let [x, y = 'b'] = ['a']; // x='a', y='b'
//    console.log(x,y)
//    let [x, y = '123'] = ['a', undefined]; // x='a', y='b';复制为undefined也会取回默认值
//    console.log(x,y)
//    注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
//    所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
//    let [x = 1] = [undefined];
//    console.log(x)
//    let [x = 1] = [null];//null,默认值不生效
//    console.log(x)

//----------------------------------------------------------------
    //如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

    //var ab = 'ddd';
    ////let [x = f()] = [254];//能取到值,所以x是254;
    //let [x = f()] = [];//不能取到值,那么 x 为表达式的结果
    //function f() {
    //    let ab = 111;
    //    if(true){
    //        //ab = 2222;
    //        //let ab = 45452222;
    //        return ab + 'aaa';
    //    }
    //}
    //console.log(x)
//----------------------------------------------------------------
    //默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
    //let [x = 1,y = x] = [];
    //let [x = 1, y = x] = [2];//y赋值指向x,x值变化,y在赋值中跟着变化;
    //console.log(x,y)
    //x++;//但是x之后改变不影响y的值
    //console.log(x,y)
    //如果赋值操作中有y有值可取则还是取赋值的值;
    //let [x = 1, y = x] = [1, 2]; // x=1; y=2
    //y = y+5;
    //console.log(x,y);
    //表达式之所以会报错，是因为x用到默认值y时，y还没有声明
    //报错,不可在声明之前赋值
    //let [x = y, y = 1] = [];     // ReferenceError

//----------    对象解构赋值     -----------------
    //变量与属性名必须相同匹配,次序可以无序
    //let{foo,bar} = {bar:'1',foo:'123'};
    //console.log(foo,bar)
    //变量名未取到相同则为undefined
    //let {a} = {b:'11'};
    //console.log(a)//undefined
    //变量名与属性名不通,写法如下
    //冒号前的参数为匹配属性名,冒号后为新的变量;
    //let {foo:baz} = {foo:'aa',bar:'12'};
    //console.log(baz);
    //对象结构常用写法
    //let obj = {first:'hello',last:'work'};
    //let {first:f,last:l}= obj;
    //console.log(l,f);
    //let { foo: a, bar: b } = { foo: "33", bar: "5" };
    //console.log(a,b)
    //解构用于嵌套结构的对象。
    //let obj = {
    //    p: ['hello', {world: 'tips'}]
    //};
    //let {p:[x,y]} = obj;
    //console.log(x,y)//hello {world:'tips'}
    //let {p:[x,{world:y}]} = obj;
    //console.log(x,y)

    // 静态声明
    // 上面代码有三次解构赋值，
    // 分别是对loc、start、line三个属性的解构赋值
    // 注意，最后一次对line属性的解构赋值之中
    // 只有line是变量，loc和start都是模式，不是变量。
    //const node = {
    //    loc:{
    //        start:{
    //            line:'1',
    //            column:5
    //        }
    //    }
    //};
    //let {loc,loc:{start},loc:{start:{line}}} = node;
    //console.log(line);
    //console.log(loc);
    //console.log(start);
    /*-----多变量嵌套赋值----*/
    //let obj = {};
    //let arr = [];
    //({foo:obj.prop,bar:arr[1]} = {foo:444,bar:true});
    //console.log(obj);
    //console.log(arr)
    //解构,指定默认值
    //var {x = 3} = {};
    //console.log(x);
    //let {x,y = 5} = {x:1};
    //console.log(y,x);
    //let {x,y = 5} = {x:1,y:3};
    //console.log(y,x);
    //let {x:y = 1}= {x:{aa:222}};
    //let {x:y = 1}= {};
    //console.log(y);

    //默认值生效的条件是，对象的属性值严格等于undefined,
    //var {x = 3}= {x:undefined};
    //console.log(x);
    //var {x = 3} = {x: null};
    //console.log(x);

    //解构模式是嵌套的对象而且自对象所在的父属性不存在,会报错
    //let {foo:{bar}} = {baz:'baz'};

    // 错误的写法,要将一个已经声明的变量用于解构赋值，必须非常小心。
    //let x;
    //({x} = {x: 1});//{x} = {x: 1}不加括号会出错;
    //console.log(x)

    //数组本质也是特殊对象,可以多数组进行对象属性的解构,使用对应下标取值,
    //利用数组长度可以取到数组倒数的元素;
    //let arr = [1, 2, 3];
    //let {0 : first, [arr.length - 1] : last} = arr;
    //console.log(first) // 1
    //console.log(last) // 1

    //字符串也可以解构
    //const [a, b, c, d, e] = 'hello';
    //console.log(a,b,c);
    //对字符串解构
    //let {length : len} = 'hello';
    //console.log(len); // 5
    //let {toString: s} = 123;
    //console.log(s);
    //console.log(s === Number.prototype.toString);

    //不能对null和undefined做解构赋值
    //let { prop: x } = undefined; // TypeError
    //let { prop: y } = null; // TypeError

    //函数参数的解构赋值
    //function add([x,y]){
    //    return x +y;
    //}
    //var result = add([12,12]);
    //console.log(result)
    //map,操作数组每个元素,返回一个新的数组
    //var result = [1,5,5,4,5].map(function(i){ return i+1});
    //console.log(result)
    //var result = [[1,2],[3,5]].map(([a,b])=>a+b);
    //console.log(result)

    //function move({x,y}={x:0,y:0}){
    //    return [x,y]
    //}
    //var a = move ({x:3,y:8});
    //var b = move({x:4});
    //var c = move({});
    //var d = move();
    //console.log(a);
    //console.log(b);
    //console.log(c);
    //console.log(d);

    //undefined会触发函数参数的默认值;
    //var arr = [1,undefined,3].map((x = 'moren')=>x);
    //console.log(arr)
    //var [a] = [a,1];
    //a = 11;
    //console.log(a)

    //-------------  解构赋值的用途  -----------------------------------------
    //交换变量的值
    //let x = 1;
    //let y = 2;
    //console.log(x,y);
    //[x, y] = [y, x];
    //console.log(x,y);
    // 从函数返回多个值或者对象取值;
    //数组返回
    //function returnArr (){
    //    return [1,1,5];
    //}
    //let [a,b] = returnArr();
    //console.log(a,b)

    //对象返回
    //function returnObj (){
    //    return {foo:'12',bar:'123123'};
    //}
    //let {foo,bar} = returnObj();
    //console.log(foo,bar)

    //函数参数的定义
    //解构赋值可以方便地将一组参数与变量名对应起来。
    //有序数组传入
    //function f([x,y,z]){
    //    return x+y+z;
    //}
    //let a = f([1,4,3]);
    //console.log(a);
    //无序对象传入
    //function objFun ({x,y,z}){
    //    return {x:x,y:y+1111,z:z+2222}
    //}
    //let a = objFun({x:4,y:'字符串',z:1111});
    //console.log(a)
    //获取json对象的数据
    //let jsonObj = {
    //    id:111,
    //    status:'ok啦'
    //};
    //let {id,status} = jsonObj;
    //console.log(id+1)

    //遍历Map结构
    //const map = new Map();
    //map.set('first','hello');
    //map.set('second', 'world');
    //for(let [key,value] of map){
    //    console.log(key,value)
    //}

    //注入模块的指定方法
    //const { SourceMapConsumer, SourceNode } = require("source-map");


    /*-------------------------  字符串的扩展  -----------------------------*/
    // let str = 'hello world-';
    //console.log(str.includes('he'));
    //console.log(str.includes('ac'));
    //console.log('开始位置6',str.startsWith('wo',6));
    //console.log('开始位置0',str.startsWith('hello',0));
    //console.log('结束位置',str.endsWith('lo', 4));
    //console.log('index',str.indexOf('o'))
    //重复字符串
    //console.log('repeat--',str.repeat(3));

    //模版字符串
    //var speak = `hello ${str}`;
    //console.log(speak);

    /*--------------------------  正则扩展 -------------------------------*/

    //构造函数合法
    //var regex= new RegExp(/xyz/,'i');
    //console.log(regex.test('xyz222'));
    //console.log(regex.test('xy1z222'));

    /*------------------------- 数值扩展 ---------------------------------*/

    //二进制和八进制表示法
    //ES6提供了二进制和八进制数值的新写法,二进制使用0B或者0b开头,而十六进制使用0加字母O,或者小写字母o;
    //console则直接调用Number()方法,输出为十进制
    //console.log(0b0001111);//15
    //console.log(0o123);//83

    //Number新增isFinite()检测数字是否有限
    //console.log(
    //    Number.isFinite(15), // true
    //    Number.isFinite(0.8), // true
    //    Number.isFinite(NaN),// false
    //    Number.isFinite(Infinity), // false
    //    Number.isFinite(-Infinity), // false
    //    Number.isFinite('foo'), // false
    //    Number.isFinite('15'), // false
    //    Number.isFinite(true) // false
    //);

    //es5实现isFinite()方法
    //(function (global) {
    //    var global_isFinite = global.isFinite;
    //
    //    Object.defineProperty(Number, 'isFinite', {
    //        value: function isFinite(value) {
    //            return typeof value === 'number' && global_isFinite(value);
    //        },
    //        configurable: true,
    //        enumerable: false,
    //        writable: true
    //    });
    //})(this);

    // Number新增isNaN()检查数字是否为NaN
    //console.log(
    //    Number.isNaN(NaN),// true
    //    Number.isNaN(15), // false
    //    Number.isNaN('15'), // false
    //    Number.isNaN(true), // false
    //    Number.isNaN(9 / NaN),// true
    //    Number.isNaN('true' / 0),// true
    //    Number.isNaN('true' / 'true') // true
    //);
//总结:
//    Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false

//    Number.isInteger()用来判断一个值是否为整数。需要注意的是，
//    在 JavaScript 内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
//    Number.isInteger(25) // true
//    Number.isInteger(25.0) // true
//    Number.isInteger(25.1) // false
//    Number.isInteger("15") // false
//    Number.isInteger(true) // false
//    ES5实现判断一个数字是否为整数
//    (function (global) {
//        var floor = Math.floor,
//            isFinite = global.isFinite;
//
//        Object.defineProperty(Number, 'isInteger', {
//            value: function isInteger(value) {
//                return typeof value === 'number' &&
//                    isFinite(value) &&
//                    floor(value) === value;
//            },
//            configurable: true,
//            enumerable: false,
//            writable: true
//        });
//    })(this);

//    新增常量Number.EPSILON,多用来判断两个浮点数是否相等
//    Number.EPSILON的实质是一个可以接受的最小误差范围。
//    console.log(0.1+0.2-0.3);
//    console.log(Number.EPSILON * Math.pow(2, 2));
//    console.log(0.1+0.2-0.3 < Number.EPSILON * Math.pow(2, 2));


//    安全整数和 Number.isSafeInteger()
//    JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）
//    console.log(9007199254740993) //9007199254740992,超过1,但没办法精确

//    ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量
//    Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1  // true
//    Number.MAX_SAFE_INTEGER === 9007199254740991  // true
//    Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER  // true
//    Number.MIN_SAFE_INTEGER === -9007199254740991// true


    //Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

    //Number.isSafeInteger('a') // false
    //Number.isSafeInteger(null) // false
    //Number.isSafeInteger(NaN) // false
    //Number.isSafeInteger(Infinity) // false
    //Number.isSafeInteger(-Infinity) // false
    //
    //Number.isSafeInteger(3) // true
    //Number.isSafeInteger(1.2) // false
    //Number.isSafeInteger(9007199254740990) // true
    //Number.isSafeInteger(9007199254740992) // false
    //
    //Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
    //Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
    //Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
    //Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false

    //Math对象的扩展
    //Math.trunc方法用于去除一个数的小数部分，返回整数部分。
    //可以传入布尔值,字符串,数字,null
    //console.log(Math.trunc('1.88'));
    //console.log(Math.trunc(5.44));
    //console.log(
    //    Math.trunc('123.456'),// 123
    //    Math.trunc(true), //1
    //    Math.trunc(false), // 0
    //    Math.trunc(null), // 0
    //    Math.trunc('1.5a'), // 0
    //    Math.trunc(NaN),     // NaN
    //    Math.trunc('foo'),    // NaN
    //    Math.trunc(),         // NaN
    //    Math.trunc(undefined) // NaN
    //);
    //es5实现以上方法
    //Math.trunc = Math.trunc || function(x) {
    //        return x < 0 ? Math.ceil(x) : Math.floor(x);
    //    };


    //Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
    //console.log(
    //    Math.sign(-5), // -1
    //    Math.sign(5), // +1
    //    Math.sign(0), // +0
    //    Math.sign(-0), // -0
    //    Math.sign(NaN) // NaN
    //);
    //Math.cbrt方法用于计算一个数的立方根
    //console.log(
    //    Math.cbrt(-1),// -1
    //    Math.cbrt(0), // 0
    //    Math.cbrt(1),  // 1
    //    Math.cbrt(2),// 1.2599210498948734
    //    Math.cbrt(27),  //3?
    //    Math.cbrt(8) , //3?
    //    Math.cbrt('8'),//3?
    //    Math.cbrt('hello')  //3?
    //);
    //Es5实现方法
    //Math.cbrt = Math.cbrt || function(x) {
    //        var y = Math.pow(Math.abs(x), 1/3);
    //        return x < 0 ? -y : y;
    //    };

    //JavaScript的整数使用32位二进制形式表示
    //Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0
    //”count leading zero bits in 32-bit binary representations of a number“
    //console.log(
    //    Math.clz32(0),// 32
    //    Math.clz32(1),// 31
    //    Math.clz32(1000), // 22
    //    Math.clz32(0b00000001000000000000000000000000),// 1
    //    Math.clz32(0b00100000000000000000000000000000) // 2
    //);
    //对于小数，Math.clz32方法只考虑整数部分。
//    Math.clz32(3.2) // 30
//    Math.clz32(3.9) // 30

//    对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算
    //Math.clz32() // 32
    //Math.clz32(NaN) // 32
    //Math.clz32(Infinity) // 32
    //Math.clz32(null) // 32
    //Math.clz32('foo') // 32
    //Math.clz32([]) // 32
    //Math.clz32({}) // 32
    //Math.clz32(true) // 31

    // Math.imul()
    // 如果只考虑最后32位，大多数情况下，Math.imul(a, b)与a * b的结果是相同的，
    // 即该方法等同于(a * b)|0的效果（超过32位的部分溢出）。
    // 之所以需要部署这个方法，是因为JavaScript有精度限制，超过2的53次方的值无法精确表示。
    // 这就是说，对于那些很大的数的乘法，低位数值往往都是不精确的，
    // Math.imul方法可以返回正确的低位数值。

    //Math.fround()
    //Math.fround方法返回一个数的单精度浮点数形式。
//      Math.fround(0)     // 0
//    Math.fround(1)     // 1
//    Math.fround(1.337) // 1.3370000123977661
//    Math.fround(1.5)   // 1.5
//    Math.fround(NaN)   // NaN
//    对于整数来说，Math.fround方法返回结果不会有任何不同，区别主要是那些无法用64个二进制位精确表示的小数。这时，Math.fround方法会返回最接近这个小数的单精度浮点数。
//
//对于没有部署这个方法的环境，可以用下面的代码模拟。

    //Math.fround = Math.fround || function(x) {
    //        return new Float32Array([x])[0];
    //    };


    //Math.hypot(),可以用来计算勾股定理
    //Math.hypot方法返回所有参数的平方和的平方根。
    //Math.hypot(3, 4);        // 5
    //Math.hypot(3, 4, 5);     // 7.0710678118654755
    //Math.hypot();            // 0
    //Math.hypot(NaN);         // NaN
    //Math.hypot(3, 4, 'foo'); // NaN
    //Math.hypot(3, 4, '5');   // 7.0710678118654755
    //Math.hypot(-3);          // 3


    // Math.expm1(),返回(e的x次方 - 1)的结果
    //Math.expm1(x)返回ex - 1，即Math.exp(x) - 1。

    //Math.expm1(-1) // -0.6321205588285577
    //Math.expm1(0)  // 0
    //Math.expm1(1)  // 1.718281828459045

    //ES5方法
    //Math.expm1 = Math.expm1 || function(x) {
    //        return Math.exp(x) - 1;
    //    };

    //Math.log1p()
    //Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。

    //Math.log1p(1)  // 0.6931471805599453
    //Math.log1p(0)  // 0
    //Math.log1p(-1) // -Infinity
    //Math.log1p(-2) // NaN


    //es5
    //Math.log1p = Math.log1p || function(x) {
    //        return Math.log(1 + x);
    //    };


    //Math.log10()返回以10为底的x的对数。如果x小于0，则返回NaN。

    //Math.log10(2)      // 0.3010299956639812
    //Math.log10(1)      // 0
    //Math.log10(0)      // -Infinity
    //Math.log10(-2)     // NaN
    //Math.log10(100000) // 5

    //ES5
    //Math.log10 = Math.log10 || function(x) {
    //        return Math.log(x) / Math.LN10;
    //    };

    //Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN。
    //Math.log2(3)       // 1.584962500721156
    //Math.log2(2)       // 1
    //Math.log2(1)       // 0
    //Math.log2(0)       // -Infinity
    //Math.log2(-2)      // NaN
    //Math.log2(1024)    // 10
    //Math.log2(1 << 29) // 29

    //ES5
    //Math.log2 = Math.log2 || function(x) {
    //        return Math.log(x) / Math.LN2;
    //    };

//    Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
//Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
//Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
//Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
//Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
//Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

    //Math.signbit()
    //Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0。
    //Math.sign(-0) // -0
//这导致对于判断符号位的正负，Math.sign()不是很有用。
// JavaScript 内部使用64位浮点数（国际标准IEEE 754）表示数值，
// IEEE 754规定第一位是符号位，0表示正数，1表示负数。所以会有两种零，
// +0是符号位为0时的零值，-0是符号位为1时的零值。实际编程中，
// 判断一个值是+0还是-0非常麻烦，因为它们是相等的。

//指数运算符**
//    console.log(2 ** 8)

    //指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。
    //let a = 1.5;
    //a **= 2;
    //在 V8 引擎中，指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。
//    Math.pow(99, 99)
//// 3.697296376497263e+197
//
//    99 ** 99
//// 3.697296376497268e+197


    /*------------------------------- 函数的扩展 ----------------------------------------------*/

////函数可以指定默认值
//    function Point(x = 0, y = 0) {
//        this.x = 10;
//        this.y = y;
//    }
//
//    const p = new Point();
//    console.log(p);// { x: 0, y: 0 }


//    参数变量是默认声明的，所以不能用let或const再次声明。
//    function foo(x = 5) {
//        let x = 1; // error
//        const x = 2; // error
//    }


    //一个容易忽略的地方是，参数默认值不是传值的，
    // 而是每次都重新计算默认值表达式的值。
    // 也就是说，参数默认值是惰性求值的。
    //这里的x的值变化,重新执行函数则会重新计算
    //let x = 99;
    //function foo(p = x + 1) {
    //    console.log(p);
    //}
    //foo() // 100
    //
    //x = 100;
    //foo() // 101

    //与解构赋值默认值结合使用
    //参数默认值可以与解构赋值的默认值，结合起来使用。

    //function foo({x,y= 5}){
    //    console.log(x,y);
    //}
    //foo({});
    //foo({x: 1});
    //foo({x: 1,y:6});
    //foo();//报错,读不到x或者y属性
    //可以赋给一个空对象作为默认值
    //function foo({x,y=1} = {}){
    //    console.log(x,y)
    //}
    ////这代表如果没有传obj,传一个空的obj,然后y在其中有默认值为1。
    //foo();


    //如果函数fetch的第二个参数是一个对象，
    // 就可以为它的三个属性设置默认值。
    // 这种写法不能省略第二个参数，
    // 如果结合函数参数的默认值，
    // 就可以省略第二个参数。
    // 这时，就出现了双重默认值。
    //function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    //    console.log(method);
    //}
    //
    ////函数fetch没有第二个参数时，函数参数的默认值就会生效，
    //// 然后才是解构赋值的默认值生效，变量method才会取到默认值GET。
    //fetch('http://example.com')

    //function m1({x = 0 ,y = 0}={}) {
    //    console.log([x, y]);
    //    return [x, y]
    //}
    //
    //function m2({x,y} = {x: 0, y: 0}) {
    //    console.log([x, y]);
    //    return [x, y]
    //}

    // 区别是
    // 写法一 函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
    // 写法二 函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
    // 函数没有参数的情况
    //m1(); // [0, 0]
    //m2(); // [0, 0]

// x 和 y 都有值的情况
//    m1({x: 3, y: 8}) ;// [3, 8]
//    m2({x: 3, y: 8}); // [3, 8]

// x 有值，y 无值的情况
//    m1({x: 3}); // [3, 0]
//    m2({x: 3}); // [3, undefined]

// x 和 y 都无值的情况
//    m1({}) ;// [0, 0];
//    m2({}); // [undefined, undefined]
//
//    m1({z: 3}); // [0, 0]
//    m2({z: 3}); // [undefined, undefined]

    //通常情况下，定义了默认值的参数，应该是函数的尾参数。
    // 因为这样比较容易看出来，到底省略了哪些参数。
    // 如果非尾部的参数设置默认值，实际上这个参数是没法省略的。

    // 例一
//    function f(x = 1, y) {
//        return [x, y];
//    }
//
//    f() // [1, undefined]
//    f(2) // [2, undefined])
//    f(, 1) // 报错
//    f(undefined, 1) // [1, 1]
//
//// 例二
//    function f(x, y = 5, z) {
//        return [x, y, z];
//    }
//
//    f() // [undefined, 5, undefined]
//    f(1) // [1, 5, undefined]
//    f(1, ,2) // 报错
//    f(1, undefined, 2) // [1, 5, 2]

//如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
//    function foo(x = 5, y = 6) {
//        console.log(x, y);
//    }
//
//    foo(undefined, null);//x参数对应undefined，结果触发了默认值，y参数等于null，就没有触发默认值。

    //指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
    //(function (a) {}).length // 1
    //(function (a = 5) {}).length // 0
    //(function (a, b, c = 5) {}).length // 2

    //一旦设置了参数的默认值，函数进行声明初始化时，
    // 参数会形成一个单独的作用域（context）。
    // 等到初始化结束，这个作用域就会消失。
    // 这种语法行为，在不设置参数默认值时，是不会出现的。
    //参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。
    // 在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。
    //var x = 1;
    //
    //function f(x, y = x) {
    //    console.log(y);
    //}
    //
    //f(2) // 2

    //函数f调用时，参数y = x形成一个单独的作用域。
    // 这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。
    // 函数调用时，函数体内部的局部变量x影响不到默认值变量x。
    //let x = 1;
    //
    //function f(y = x) {
    //    let x = 2;
    //    console.log(y);
    //}
    //
    //f() ;// 1

    //全局变量x不存在，就会报错。
    //function f(y = x) {
    //    let x = 2;
    //    console.log(y);
    //}
    //
    //f() // ReferenceError: x is not defined


    //参数x = x形成一个单独作用域。
    // 实际执行的是let x = x，由于暂时性死区的原因，
    // 这行代码会报错”x 未定义“。
    //var x = 1;
    //
    //function foo(x = x) {
    //    // ...
    //}
    //
    //foo() // ReferenceError: x is not defined

    //函数bar的参数func的默认值是一个匿名函数，返回值为变量foo。
    // 函数参数形成的单独作用域里面，并没有定义变量foo，
    // 所以foo指向外层的全局变量foo，因此输出outer。
    //let foo = 'outer';
    //
    //function bar(func = () => foo) {
    //    let foo = 'inner';
    //    console.log(func());
    //}
    //
    //bar(); // outer


    //报错。匿名函数里面的foo指向函数外层，但是函数外层并没有声明变量foo，所以报错了。
    //function bar(func = () => foo) {
    //    let foo = 'inner';
    //    console.log(func());
    //}
    //
    //bar(); // ReferenceError: foo is not defined

    //y 有自己的作用域,x
    //var x = 1;
    //function foo(x, y = function() { x = 2; }) {
    //    var x = 3;
    //    y();
    //    console.log(x);
    //}
    //
    //foo() // 3
    //x // 1

//    函数foo的参数形成一个单独作用域。这个作用域里面，
// 首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。
// 这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。
// 函数foo内部又声明了一个内部变量x，
// 该变量与第一个参数x由于不是同一个作用域，
// 所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。
//
//如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，
// 与匿名函数内部的x是一致的，所以最后输出的就是2，
// 而外层的全局变量x依然不受影响。
//
//    var x = 1;
//    function foo(x, y = function() { x = 2; }) {
//        x = 3;
//        y();
//        console.log(x);
//    }
//
//    foo() // 2
//    x // 1


//    ES6 引入 rest 参数（形式为...变量名），
// 用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
//    function add(...values) {
//        let sum = 0;
//
//        for (var val of values) {
//            sum += val;
//        }
//
//        return sum;
//    }
//
//    var sum = add(2, 5, 3) ;// 10
//    console.log(sum)

//arguments对象不是数组，而是一个类似数组的对象。
// 所以为了使用数组的方法，
// 必须使用Array.prototype.slice.call先将其转为数组。
// rest 参数就不存在这个问题，它就是一个真正的数组，
// 数组特有的方法都可以使用。
// 下面是一个利用 rest 参数改写数组push方法的例子。
// arguments变量的写法

//    function sortNumbers() {
//        return Array.prototype.slice.call(arguments).sort();
//    }
//
//// rest参数的写法
//    const sortRestNumbers = (...numbers) => numbers.sort();
//    var a = sortNumbers(1,5);
//    var b = sortRestNumbers(5,6);
//    console.log(a,b);

    //数字添加
    //function push(array, ...items) {
    //    items.forEach(function(item) {
    //        if(item >= 2){
    //            array.push(item);
    //        }
    //    });
    //}
    //
    //var a = [];
    //push(a, 1, 2, 3);
    //console.log(a);


    //rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
    // 报错
    //function f(a, ...b, c) {
    //    // ...
    //}
    //函数的length属性，不包括 rest 参数。
    //(function(a) {}).length  // 1
    //(function(...a) {}).length  // 0
    //(function(a, ...b) {}).length  // 1

    //ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
//    // 报错
//    function doSomething(a, b = a) {
//        'use strict';
//        // code
//    }
//
//// 报错
//    const doSomething = function ({a, b}) {
//        'use strict';
//        // code
//    };
//
//// 报错
//    const doSomething = (...a) => {
//        'use strict';
//        // code
//    };
//
//    const obj = {
//        // 报错
//        doSomething({a, b}) {
//            'use strict';
//            // code
//        }
//    };
//这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。
// 但是，函数执行的时候，先执行函数参数，然后再执行函数体。
// 这样就有一个不合理的地方，只有从函数体之中，
// 才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。

//解决:
//第一种 ,全局性的严格模式
    //'use strict';
    //
    //function doSomething(a, b = a) {
    //    // code
    //}

//第二种是把函数包在一个无参数的立即执行函数里面。
//    const doSomething = (function () {
//        'use strict';
//        return function(value = 42) {
//            return value;
//        };
//    }());

//函数新增name属性
//    function foo() {}
//    console.log(foo.name )// "foo"


    /*--------------------------- 箭头函数 -----------------------------*/

    //var f = v => v;
    //
    //等同于
    //var f = function(v) {
    //    return v;
    //};


    //var f = () => 5;
    //// 等同于
    //var f = function () { return 5 };

//    var sum = (num1,num2)=> num1 + num2;
//
//    console.log(sum());
//    console.log(sum(1,5));
//    console.log(sum(1,'字符串'));
//// 等同于
//    var sum = function(num1, num2) {
//        return num1 + num2;
//    };


    //如果箭头函数的代码块部分多于一条语句，
    // 就要使用大括号将它们括起来，并且使用return语句返回。
    //var sum = (num1, num2) => { return num1 + num2; }
    //由于大括号被解释为代码块，
    // 所以如果箭头函数直接返回一个对象，
    // 必须在对象外面加上括号，否则会报错。
//// 报错
//    let getTempItem = id => { id: id, name: "Temp" };
//
//// 不报错
//    let getTempItem = id => ({ id: id, name: "Temp" });

    //如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
    //let fn = () => void doesNotReturn();

    //箭头函数可以与变量解构结合使用。
    //const full = ({first,last}) => {return first + last;}
    //console.log(full({'11',22}))


    //简洁的判断奇偶

    //const isEven = n => n % 2 == 0;
    //const square = n => n * n;
    //console.log(isEven(7));
    //console.log(isEven(8));
    //console.log(square(7));


//    // 正常函数写法
//    var square = [1,2,3].map(function (x) {
//        return x * x;
//    });
//    console.log(square);
//// 箭头函数写法
//    var square = [1,5,3].map(x => x * x);
//    console.log(square);

//      正常函数写法
//    var result = values.sort(function (a, b) {
//        return a - b;
//    });
//
//       箭头函数写法
//    var result = values.sort((a, b) => a - b);


    //const numbers = (...nums) => nums;
    //var result = numbers(1,5,5,4,5,4,5);
    //console.log(result)
    //
    //const headAndTail = (head, ...tail) => [head, tail];
    //
    //headAndTail(1, 2, 3, 4, 5)


    //
    //箭头函数有几个使用注意点。
    //
    //（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    //
    //（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    //
    //（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    //
    //（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

    //function foo() {
    //    setTimeout(()=> {
    //        console.log(this.msg);
    //    },100)
    //}
    //var msg =  1000;
    //foo.call({msg:1222});


    //function Timer() {
    //    this.s1 = 0;
    //    this.s2 = 0;
    //    // 箭头函数
    //    setInterval(() => this.s1++, 100);
    //    // 普通函数
    //    setInterval(function () {
    //        this.s2++;
    //    }, 100);
    //}
    //
    //var timer = new Timer();
    //
    //setTimeout(() => console.log('s1: ', timer.s1), 310);
    //setTimeout(() => console.log('s2: ', timer.s2), 310);

//// ES6
//    function foo() {
//        setTimeout(() => {
//            console.log('id:', this.id);
//        }, 100);
//    }
//
//// ES5
//    function foo() {
//        var _this = this;
//        this.id = 10
//        setTimeout(function () {
//            console.log('id:', _this.id);
//        }, 100);
//    }
//
//    foo();

    //只有一个this，就是函数foo的this，
    // 所以t1、t2、t3都输出同样的结果。
    // 因为所有的内层函数都是箭头函数，都没有自己的this，
    // 它们的this其实都是最外层foo函数的this。
    //function foo() {
    //    return () => {
    //        return () => {
    //            return () => {
    //                console.log('id:', this.id);
    //            };
    //        };
    //    };
    //}
    //
    //var f = foo.call({id: 10});
    //
    //var t1 = f.call({id: 2})()(); // id: 1
    //var t2 = f().call({id: 3})(); // id: 1
    //var t3 = f()().call({id: 4}); // id: 1
    //console.log(f,t1,t2,t3)

    //function foo() {
    //
    //    setTimeout(()=> {
    //        console.log('args', arguments)
    //    }, 100)
    //}
    //
    //foo(1, 2, 3)

    //由于箭头函数没有自己的this，
    // 所以当然也就不能用call()、apply()、bind(),这些方法去改变this的指向。
    //箭头函数没有自己的this，所以bind方法无效，内部的this指向外部的this。
    //不报错但无效
    //var _this = (function() {
    //    return [
    //        (() => this.x).bind({ x: 'inner' })()
    //    ];
    //}).call({ x: 'outer' });
    //console.log(_this)


    //ES5 语法的多重嵌套函数。
    //function insert(value) {
    //    return {into: function (array) {
    //        return {after: function (afterValue) {
    //            array.splice(array.indexOf(afterValue) + 1, 0, value);
    //            return array;
    //        }};
    //    }};
    //}
    //
    //insert(2).into([1, 3]).after(1); //[1, 2, 3]

    //let insert = (value) =>({into:(array) => ({after:(afterValue) => {
    //    array.splice(array.indexOf(afterValue+1),0,value);
    //    return array
    //}})})
    //let newArray = insert(1).into([1,3]).after(1);
    //console.log(newArray)

    //数组reduce
    //var arr = [1, 2, 5, 4, 3, 55, 44];
    //var maxNum = arr.reduce(function (prev, next,index,array) {
    //    console.log(prev, next,index,array);
    //    if (prev > next) {
    //        return prev
    //    } else {
    //        return next
    //    }
    //});
    //console.log(maxNum)

    //部署管道机制（pipeline）
    //
    //const pipeline = (...funs)=> val=> funs.reduce((a, b) => {
    //    console.log('-----', a, b);
    //    var result = b(a);
    //    console.log(result);
    //    return result
    //}, val);
    //
    //const plus1 = a =>a + 1;
    //
    //const mult2 = a => a * 2;
    //
    //const addThenMult = pipeline(plus1, mult2);
    //
    //var a = addThenMult(5);
    ////console.log(addThenMult)
    //console.log(a)

    //这种写法可读性高
    //const plus1 = a => a + 1;
    //const mult2 = a => a * 2;
    //mult2(plus1(5));

    //-------  双冒号运算符 ----------

    //var foo = {a:11};
    //function bar(){
    //    console.log(this.a)
    //}
    //
    ////foo::bar;
    //bar();
    ////等同于
    ////bar.apply(foo,arguments);

    //尾调用优化
    //function addOne(a){
    //    var one = 1;
    //    function inner(b){
    //        console.log('in',b);
    //        return b + one;
    //    }
    //    return inner(22);
    //}
    //var inner = addOne(1);
    //console.log(inner);

    //递归、尾递归
    //function factorial(n) {
    //    console.log(n)
    //    if (n === 1) return 1;
    //    return n * factorial(n - 1);
    //}
    //
    //var result = factorial(5); // 120
    //console.log(result)
    //计算n的阶乘,使用尾递归,只保留一个调用记录
    //function factorial(n, total) {
    //    //console.log(n)
    //    if (n == 1) {
    //        return total
    //    }
    //    console.log(n-1)
    //    return factorial(n-1, n * total);
    //}
    //
    //var result = factorial(5,1);
    //console.log(result)
    //
    // var i = 0;
    //
    // function Fibonacci(n) {
    //     if (n <= 1) {
    //         return 1
    //     }
    //     i++;
    //     console.log(i,n);
    //     // console.log(n-1)
    //     // console.log(n-2)
    //     //console.log(Fibonacci(n - 1) + Fibonacci(n - 2));
    //     return Fibonacci(n - 1) + Fibonacci(n - 2);
    // }
    //
    // var result = Fibonacci(10); // 89
    // console.log(result)

    //
    // var arr = new Array(10);
    // arr[0] = 1;
    // arr[1] = 1;
    // var result = 0;
    // for (var i = 2; i < 10; i++) {
    //     arr[i] = arr[i - 1] + arr[i - 2];
    //     console.log(arr)
    // }
    // for (var i =0;i<arr.length;i++){
    //     result += arr[i]
    // }
    // console.log(result)


    // function tailFactorial(n,total) {
    //     if(n===1){
    //         return total
    //     }
    //     var newNum = n-1;
    //     console.log(newNum,n*total)
    //     console.log(total)
    //     return tailFactorial(newNum,n*total)
    // }
    // function factorial(n) {
    //     return tailFactorial(n, 1);
    // }
    // var result = factorial(5);
    // console.log(result)

    // 提示:  循环可以用递归代替，
    //        而一旦使用递归，就最好使用尾递归。

    // ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
    // 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
    // func.arguments：返回调用时函数的参数。
    // func.caller：返回调用当前函数的那个函数。
    // 尾调用优化发生时，函数的调用栈会改写，
    // 因此上面两个变量就会失真。
    // 严格模式禁用这两个变量，
    // 所以尾调用模式仅在严格模式下生效。
    //
    // function restricted() {
    //     'use strict';
    //     restricted.caller;    // 报错
    //     restricted.arguments; // 报错
    // }
    // restricted();

    // es5尾递归优化
    // function tco(f) {
    //     var value;
    //     var active = false;
    //     var accumulated = [];
    //
    //     return function accumulator() {
    //         console.log(arguments);
    //         accumulated.push(arguments);
    //         console.log(accumulated);
    //
    //         if (!active) {
    //             active = true;
    //             while (accumulated.length) {
    //                 console.log('length',accumulated.length)
    //                 console.log('active',active)
    //                 value = f.apply(this, accumulated.shift());
    //                 console.log('value---',value);
    //                 console.log('------------');
    //             }
    //             console.log('value',value);
    //
    //             active = false;
    //             return value;
    //         }
    //     };
    // }
    //
    // var sum = tco(function(x, y) {
    //     if (y > 0) {
    //         return sum(x + 1, y - 1)
    //     }
    //     else {
    //         return x
    //     }
    // });
    //
    // var result = sum(1, 10);
    // console.log(result)


    // 扩展运算符（spread）是三个点（...）。
    // 它好比 rest 参数的逆运算，
    // 将一个数组转为用逗号分隔的参数序列。
    // console.log(...['sdf', {aa: 11}, 3])


    // 该运算符主要用于函数调用。
    // function push(array, ...items) {
    //     // var moreParam = (...items)
    //     console.log(...items);
    //     array.push(...items);
    //     return array
    // }
    //
    // function add(x, y) {
    //     return x + y;
    // }
    //
    // const numbers = [4, 38];
    // var result = add(...numbers);
    // console.log(result)// 42
    // var newArray1 = push([100], ...[1, 5, 1, 5, 4, 7]);
    // var newArray2 = push([100], 1,5,4,78,5,8787);
    // console.log(newArray1)
    // console.log(newArray2)

    //把数组对应的元素传入
    // function f(v, w, x, y, z) {
    //     console.log(v, w, x, y, z)
    // }
    // const args = [0, 1];
    // f(-1, ...args, 2, ...[3,5]);

    //使用数组下标作为key返回一个object
    // let x = 10;
    // let result =  {...[5,12,111,55]};
    // console.log(result);

    //求数组最大值
    // ES5 的写法
    // var result = Math.max.apply(null, [14, 3, 77]);
    // console.log(result)
    // // ES6 的写法
    // result = Math.max(...[14, 3, 78]);
    // console.log(result)
    // // 等同于
    // result = Math.max(14, 3, 79);
    // console.log(result)

    //push函数扩展
    //es5写法
    // var arr1= [1,2,3];
    // var arr2 =[1.5,5];
    // var result = Array.prototype.push.apply(arr1,arr2);
    // console.log(result);//返回长度
    // console.log(arr1);//改变了arr1
    // console.log(arr2);//arr2不变

    // let arr1= [1,2,3];
    // let arr2 =[1.5,5];
    // //es6写法
    // var result = arr1.push(...arr2)
    // console.log(result);//5,数组长度
    // console.log(arr1);//改变了arr1
    // console.log(arr2);//arr2不变

    //时间扩展
    //es5
    // var time = new(Date.bind.apply(Date,[null,2015,10,10]));
    // console.log(time)
    // //es6
    // var timeEs6 = new Date(...[2015,10,1]);
    // console.log(timeEs6)


    //扩展-复制数组
    //数组是复合的数据类型，直接复制的话，
    // 只是复制了指向底层数据结构的指针，
    // 而不是克隆一个全新的数组。
    // const arr = [1,2];
    // const arr2 = arr;
    // arr2[1]=10;
    // console.log(arr)//[1,10],会导致两个数组都变化

    //es5实现复制的方法
    // const arr = [1,2];
    // const arr1 = arr.concat();
    // console.log(arr,arr1);
    // arr1[1] = 10;
    // console.log(arr,arr1)
    // //es6写法
    // const arr = [1, 2];
    // //第一种写法
    // const arr2 = [...arr];
    // //第二种写法
    // const [...arr3] = arr;
    // arr2[0] = 10;
    // arr3[1] = 123;
    // // console.log(arr);
    // // console.log(arr2);
    // // console.log(arr3);

    // //es5合并数组
    // var arr5 = arr.concat(arr2,arr3);
    // console.log(arr5)
    // //es6合并数组
    // const arr4 = [...arr,...arr2,...arr3];
    // console.log(arr4)

    //解构赋值结合
    // var list = ['11',12,13,15];
    // var a = list[0];
    // //第一个值作为起始下标截取到下一个值的前一位
    // var rest = list.slice(1,3);
    // console.log(rest);
    // console.log(a);

    //es6写法;
    //截取第一个元素给a
    // ,剩下的给rest,
    // rest必须为最后一个参数
    // var list = ['11',12,13,15,15666];
    // var [a,...rest] = list;
    // // var [a,...rest,b] = list;//出错
    // // var [a,...rest,...b] = list;//出错
    //
    // console.log(a,rest)

    //其他例子
    // const[first,...rest] = [];
    // //undefined可以用来判别数组第一个元素有没有,
    // // 还有有时可以用来判别是不是空数组
    // console.log(first);

    // const [[first,second,third], ...rest] = ["foo"];
    // //取出第一个元素并且解构字符串
    // console.log(first,second,third) ; // "f" "o" "o"
    // console.log(rest) ; // []

    //结构字符串
    // var strArr = [...'hello world'];
    // console.log(strArr,strArr.length)

    // console.log('x\uD83D\uDE80y'.length )// 4
    // console.log('x\uD13D\uDE80y' )// 4
    // console.log(  [...'x\ue13a\uDE80y'].length )// 3
    // console.log(  [...'x\ue13a\uDE80y'])// 3

    // 实现iterator接口对象
    // let nodeList = $('div'); //返回一个对象
    // let arr = [...nodeList];//返回一个真正的数组
    // console.log(nodeList instanceof Array);
    // console.log(arr instanceof Array);

//     let arrayLike = {
//         '0': 'a',
//         '1': 'b',
//         '2': 'c',
//         length: 3
//     };
//     // 对于那些没有部署 Iterator 接口的类似数组的对象，
//     // 扩展运算符就无法将其转为真正的数组。
// // TypeError: Cannot spread non-iterable object.
//     let arr = [...arrayLike];


    // let map = new Map([
    //     [1,'2'],
    //     [3,'3'],
    //     [2,'4']
    // ]);
    // console.log(map);
    // console.log(...map);
    // console.log(...map.keys());
    // console.log([...map.keys()])


    //yield 执行到yeild声明位置暂停,
    // 保留上下文只有当调用返回的对象的next方法,
    // 才会继续执行上下文
    // const go = function*(){
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // };
    // var value = go();
    // console.log(value.next());
    // console.log(value.next());
    // console.log(value.next());
    // console.log(value.next());
    // console.log(...go());


    // function* fib2(){
    //     yield 0;//状态0，第一次调用next，返回0，并改变状态
    //     yield 1;//状态1，第二次调用next，返回1，并改变状态
    //
    //     var p1 = 0
    //         ,p2 =1
    //         ,cur = p1+p2;
    //     while(true){
    //
    //         yield cur;//状态2，后面调用next，返回相应的几个，状态不在改变
    //
    //         p1 = p2;
    //         p2 = cur;
    //         cur = p1+p2;
    //     }
    // }
    //
    // var fibIter2 = fib2();
    // for(var i =0;i<8;i++){
    //     console.log(fibIter2.next().value);
    // }


    //合并数组
    //es5做法
    // let result = [1,5].concat([1.5,5]);
    // console.log(result)

    //es6
    // let arr1 = [111,55,4845,45];
    // let arr2 = [11.5,5454,444,44,];
    // let result = [...arr1,...arr2];
    // console.log(result)


    // let map = new Map([
    //     [1, 'one'],
    //     [2, 'two'],
    //     [15,'key', 'three',5],
    //     []
    // ]);
    // let arr = [...map.keys()];
    // console.log(arr)


    // const go = function *() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    //     return 45;
    // };
    // let result = [...go()];//[1,2,3]
    // console.log(result);

    //Array.from()
    // let arrLike = {
    //     '0':1,
    //     '1':3,
    //     '2':6,
    //     '8':1,
    //     length:4
    // }
    // // es5,es6都出现因为length为4,es6在控制台会把undefined打印,而es5不会
    // // es5写法
    // var arr1 = [].slice.call(arrLike);//改变this指向
    // console.log(arr1);
    // console.log(arr1[4]);
    //
    // //es6写法
    // let arr2 = Array.from(arrLike);
    // console.log(arr2);
    // console.log(arr2.length);

    //实际应用中，常见的类似数组的对象是
    // DOM 操作返回的 NodeList 集合，
    // 以及函数内部的arguments对象。
    // Array.from都可以将它们转为真正的数组。
    //把dom返回的nodeList集合转为数组
    // let ps = $('p');
    // console.log(ps);
    // console.log(ps[0]);
    // console.log(typeof ps);
    // console.log('是不是数组', ps instanceof Array);
    // console.log('是不是对象', ps instanceof Object);
    // Array.from(ps).forEach(function (p) {
    //     console.log(p);
    //     console.log(p.innerHTML);
    // });
    // //把函数内部的arguments转为数组
    // function foo() {
    //     var args = Array.from(arguments);
    //     console.log(args)
    // }
    // foo(1,5,87,544,444);
    //
    // let result = Array.from('hello');
    // console.log(result)
    //
    // let nameSet = new Set(['a','v']);
    // console.log(nameSet);
    // console.log(Array.from(nameSet));

    // 扩展运算符（...）也可以将某些数据结构转为数组。

// // arguments对象
//     function foo() {
//         const args = [...arguments];
//     }
//
// // NodeList对象
//     var nodeList = [...document.querySelectorAll('div')]

    //只要有length都可以部署数组接口
    let result = Array.from({ '2':4,'3':3,length: 3 });
    console.log(result)
});



























