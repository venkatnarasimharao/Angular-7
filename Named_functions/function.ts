/*
function fun_one():string{
    return "data from data base soon...";
};
document.write( fun_one + "<br>"); //fuction definition
document.write(fun_one());



function fun_one():any{
    return fun_two;
};

function fun_two():string{
    return "data from data base soon...";
};

document.write(fun_one()());


function fun_one(arg1:any,arg2:any,arg3:any):void{
    document.write(arg1()+"---"+arg2()+"---"+arg3());
};
function fun_two():string{
    return "angular7";
};
function fun_three():string{
    return "nodejs";
};
function fun_four():string{
    return "mongodb";
};
fun_one(fun_two,fun_three,fun_four);



var my_arr:Array<number>=[];
for(var i:number=0;i<=10;i++){
    // my_arr.push(i);  
    my_arr.unshift(i);  //push the element in reverse order
};
document.write(my_arr.length+"<br>");
for(var i:number=0;i<my_arr.length;i++){
    document.write(my_arr[i]+"<br>");
};





var my_array:Array<any>=[];
function fun_one():string{
    return "welcome to named function....!";
};
for(var i:number=0;i<5;i++){
    my_array.push( fun_one );
};
for(var i:number=0;i<my_array.length;i++){
    document.write( my_array[i]()+"<br>");
};



*/

function fun_one(arg1:Array<any>):any{
    for(var i:number=0;i<arg1.length;i++){
        document.write(arg1[i]+"<br>");
    };
};
function fun_two():string{
    return "mongodb";
};
function fun_three():string{
    return "coucnDB";
};
var my_arr:Array<any>=[fun_two(),fun_three()];
fun_one(my_arr);







