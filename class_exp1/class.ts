class class_one{
    private var_one:class_two;
    private var_two:class_three;
    private var_three:class_four;
    constructor(arg1:class_two,arg2:class_three,arg3:class_four){
        this.var_one=arg1;
        this.var_two=arg2;
        this.var_three=arg3;
    }
    public myFun():any{
        return this.var_one.myFun()+"<br>"+this.var_two.myFun()+"<br>"+this.var_three.myFun();
    };
};
class class_two{
    public myFun():string{
        return "angularjs";
    };
};
class class_three{
    public myFun():string{
        return "nodejs";
    };
};
class class_four{
    public myFun():string{
        return "mongodb";
    };
};
var obj:class_one=new class_one(new class_two(),new class_three(),new class_four());
document.write(obj.myFun());
