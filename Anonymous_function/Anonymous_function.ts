/*
var fun_one=():string=>{
    return "data form data base soon...!";
};
document.write(fun_one());


var fun_one=():any=>{
    return ():string=>{
        return "data from data base soon......!";
    };
};
document.write(fun_one()());


var dbfun=(arg1:any,arg2:any):void=>{
    document.write(arg1()+"<br>"+arg2());
};
var SuccessCallBack=():string=>{
    return "success..........!";
};
var ErrorCallBack=():string=>{
    return "error............!";
};
dbfun(SuccessCallBack,ErrorCallBack);


var fun_one=():string=>{
    return "welcome..........!";
};
var my_arr:Array<any>=[];
for(var i:number=0;i<5;i++){
    my_arr.push(fun_one);
};
for(var i:number=0;i<my_arr.length;i++){
    document.write( my_arr[i]()+"<br>");
};

*/
var fun_one=(arg1:any,arg2:any,arg3:any):void=>{
    document.write(arg1+"<br>"+arg2+"<br>"+arg3);
};
var fun_two=():string=>{
    return "Angular 7 ...!";
};
var fun_three=():string=>{
    return "nodejs ...!";
};
var fun_four=():string=>{
    return "mongodb";
};
fun_one( fun_two(),fun_three(),fun_four());