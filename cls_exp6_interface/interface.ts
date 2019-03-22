/*
interface myInter{
    my_var:string;
};
var obj:myInter={
    my_var:"welcome to interface"
};
document.write(obj.my_var);



 interface myInter{
     var_oen:string;
     myFun():string;
 };
 var ob:myInter={
    var_oen:"angular7",
    myFun:():string=>{ return ob.var_oen}
 };
document.write(ob.var_oen+"<br>"+ob.myFun());
*/
interface intr1{
    fun_one():string;
}; 
interface intr2{
    fun_two():string;
};
interface intr3 extends intr1,intr2{
    fun_three():string;
};
class myClass implements intr3{
    public fun_one():string{
        return "i am from interface 1...........!"
    };
    public fun_two():string{
        return "i am from interface 2......!"
    };
    public fun_three():string{
        return "i am from interface 3.......!"
    };
};
var ob:myClass=new myClass();
document.write( ob.fun_one()+"<br>"+ob.fun_two()+"<br>"+ob.fun_three());