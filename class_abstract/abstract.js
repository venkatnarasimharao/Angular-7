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
;
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "angular 7";
    };
    ;
    return class_one;
}());
;
var cls_two = /** @class */ (function (_super) {
    __extends(cls_two, _super);
    function cls_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cls_two.prototype.fun_two = function () {
        return "vueJS";
    };
    ;
    return cls_two;
}(class_one));
;
var ob = new cls_two();
document.write(ob.fun_one() + "<br>" + ob.fun_two());
