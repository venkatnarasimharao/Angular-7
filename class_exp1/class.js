var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    class_one.prototype.myFun = function () {
        return this.var_one.myFun() + "<br>" + this.var_two.myFun() + "<br>" + this.var_three.myFun();
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function () {
    function class_two() {
    }
    class_two.prototype.myFun = function () {
        return "angularjs";
    };
    ;
    return class_two;
}());
;
var class_three = /** @class */ (function () {
    function class_three() {
    }
    class_three.prototype.myFun = function () {
        return "nodejs";
    };
    ;
    return class_three;
}());
;
var class_four = /** @class */ (function () {
    function class_four() {
    }
    class_four.prototype.myFun = function () {
        return "mongodb";
    };
    ;
    return class_four;
}());
;
var obj = new class_one(new class_two(), new class_three(), new class_four());
document.write(obj.myFun());
