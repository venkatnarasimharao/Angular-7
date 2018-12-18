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
class class_one{
    public myFun1():string{
        return "Naresh i Technologies";
    };
};
class class_two extends class_one{
    public myFun2():any{
        return super.myFun1();
    };
};
var ob:class_two=new class_two();
document.write( ob.myFun2());