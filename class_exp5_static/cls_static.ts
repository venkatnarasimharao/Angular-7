class cla_one{
    static var_one:string="Narasimha";
    static myFun():string{
        return this.var_one;
    };
};
document.write( cla_one.var_one+"<br>"+cla_one.myFun());
/*
for static keyword no need to create a class 
static method don't required any object 
we can access static variable with class name
by static keyword varibale is created in class ,not in heap memory
if we have a common variable with same value( var_one ="employee") for every classes if we give in each and every
class it makes memory for each class ,bcz of this memory waste, by this keyword it creates in class memory.

static can't initilize by using constructor.

*/