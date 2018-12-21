/*
abstract class class_one{
    public fun_one():string{
        return "i am from class one.........!";
    };
    public abstract fun_two():string;
};
class cls_two extends class_one{
    public fun_two():string{
        return "hiii.......!";
    };
};
var ob:cls_two=new cls_two();
document.write(ob.fun_one()+"<br>"+ob.fun_two());
*/
interface myIntr{
    fun_one():string;
};
abstract class class_one implements myIntr{
    public fun_one():string{
        return "angular 7";
    };
    public abstract fun_two():string;
};
class cls_two extends class_one{
    public fun_two():string{
        return "vueJS";
    };
};
var ob:cls_two=new cls_two();
document.write(ob.fun_one()+"<br>"+ob.fun_two());
