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
class cls_one{
    private var_one:string;
    constructor(arg1:string){
        this.var_one=arg1;
    }
    public getvar_one():string{
        return this.var_one;
    };
};
class cls_two extends cls_one{
    constructor(){
        super("narasimha");
    };
};
var obj:cls_two=new cls_two();
document.write( obj.getvar_one());
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.myFun1 = function () {
        return "Naresh i Technologies";
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
    class_two.prototype.myFun2 = function () {
        return _super.prototype.myFun1.call(this);
    };
    ;
    return class_two;
}(class_one));
;
var ob = new class_two();
document.write(ob.myFun2());
