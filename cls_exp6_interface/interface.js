;
;
;
var myClass = /** @class */ (function () {
    function myClass() {
    }
    myClass.prototype.fun_one = function () {
        return "i am from interface 1...........!";
    };
    ;
    myClass.prototype.fun_two = function () {
        return "i am from interface 2......!";
    };
    ;
    myClass.prototype.fun_three = function () {
        return "i am from interface 3.......!";
    };
    ;
    return myClass;
}());
;
var ob = new myClass();
document.write(ob.fun_one() + "<br>" + ob.fun_two() + "<br>" + ob.fun_three());
