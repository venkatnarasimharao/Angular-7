/*
class class_one{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
    constructor(){
        this.sub_one="angularjs";
        this.sub_two="nodeJs";
        this.sub_three="mongobd";
    };
    public getSubOne():string{
        return this.sub_one;
    };
    public getSubTwo():string{
        return this.sub_two;
    };
    public getSubThree():string{
        return this.sub_three;
    };
};
var obj:class_one=new class_one;
document.write( obj.getSubOne()+"<br>"+obj.getSubTwo()+"<br>"+obj.getSubThree());


class class_one{
    public myFun():any{
        return new class_two();
    };
};
class class_two{
    public myFun():any{
        return "Welcome to classes.........!";
    };
};
var obj:class_one=new class_one();
document.write(obj.myFun().myFun());

*/
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
    ;
    class_one.prototype.subOne = function () {
        return this.sub_one + "--" + this.sub_two + "--" + this.sub_three;
    };
    ;
    return class_one;
}());
;
var obj1 = new class_one("angularjs", "mongodb", "couchdb");
document.write(obj1.subOne() + "<br>");
var obj2 = new class_one("narasimah", "nara", "narasimhaRao");
document.write(obj2.subOne());
