// rest Parameters
function fun_one() {
    var arg1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg1[_i] = arguments[_i];
    }
    document.write(arg1 + "<br>");
}
;
fun_one();
fun_one(10, 20);
fun_one(10, 20, 30, 40);
// rest Parameters       transpilation means compiling
function fun_two() {
    var arg1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg1[_i] = arguments[_i];
    }
    for (var i = 0; i < arg1.length; i++) {
        document.write(arg1[i] + "<br>");
    }
}
;
fun_two();
fun_two(10, 20);
fun_two(10, 20, 30, 40);
function fun_three(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    if (arg1 != undefined) {
        document.write(arg1 + "<br>");
    }
    for (var i = 0; i < arg2.length; i++) {
        document.write(arg2[i] + "<br>");
    }
    ;
}
;
fun_three(10, 20);
fun_three(10, 20, 30, 40);
//rest argumanet position should be the last position
//we can not have more than one rest Parameters
//optional parameters
function fun_four(arg1, arg2, arg3) {
    if (arg1 != undefined) {
        document.write(arg1 + "<br>");
    }
    if (arg2 != undefined) {
        document.write(arg2 + "<br>");
    }
    ;
    if (arg3 != undefined) {
        document.write(arg3 + "<br>");
    }
}
;
fun_four();
fun_four("Angular7", "nodejs", "mongodb");
fun_four("nagularjs", undefined, "couchDB");
function fun_five(arg1, arg2) {
    var arg3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg3[_i - 2] = arguments[_i];
    }
    document.write(arg1 + "<br>" + arg2 + "<br>");
    for (var i = 0; i < arg3.length; i++) {
        document.write(arg3[i] + "<br>");
    }
}
;
fun_five("mongobd", undefined, "mysqul", "BD");
function fun_six(arg1, arg2, arg3) {
    if (arg1 === void 0) { arg1 = "angular"; }
    document.write(arg1 + "<br>" + arg2 + "<br>" + arg3 + "<br>");
}
;
fun_six(undefined, "nodeJs", "mysqul");
fun_six("anuglarjs", "Angular", "MongoBD");
function fun_seven(arg1, arg2) {
    if (arg2 === void 0) { arg2 = "angularjs"; }
    document.write(arg1 + "<br>" + arg2 + "<br>");
}
;
fun_seven("hello", undefined);
fun_seven("afpa", "kkfoajo");
function fun_eight(arg1, arg2, arg3) {
    if (arg2 === void 0) { arg2 = "fasak"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    document.write(arg1 + "<br>" + arg2 + "<br>" + arg3 + "<br>" + arg4 + "<br>");
}
;
fun_eight("mmmmm", undefined, undefined, "nnnnnn", "xxxxxxxxx", "zzzzzzzz");
