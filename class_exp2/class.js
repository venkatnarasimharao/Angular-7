var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
class clas_one{
    public fun_one():string{
        return "i am from class one.........!";
    };
};
class clas_two extends clas_one{
    public fun_two():string{
        return "i am from class two..........!";
    };
};
var obj:clas_two=new clas_two();
document.write(obj.fun_one()+"<br>"+obj.fun_two());
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.dbFun = function () {
        return "i am from nosql data base soon................!";
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.dbFun = function () {
        return "i am from Json server soon...........!";
    };
    ;
    return class_two;
}(class_one));
;
var ob = new class_two();
document.write(ob.dbFun());
