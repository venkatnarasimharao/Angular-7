// rest Parameters
function fun_one(...arg1):void{
    document.write(arg1+"<br>");
};
fun_one();
fun_one(10,20);
fun_one(10,20,30,40);
 
// rest Parameters       transpilation means compiling
function fun_two(...arg1):void{
    for(var i:number=0;i<arg1.length;i++){
        document.write(arg1[i]+"<br>")
    }
};
fun_two();
fun_two(10,20);
fun_two(10,20,30,40);

function fun_three(arg1:number,...arg2:number[]):void{
    if(arg1 !=undefined){
        document.write(arg1+"<br>");
    }
    for(var i:number=0;i<arg2.length;i++){
        document.write(arg2[i]+"<br>");
    };
};
fun_three(10,20);
fun_three(10,20,30,40);


//rest argumanet position should be the last position
//we can not have more than one rest Parameters

        //optional parameters

function fun_four(arg1?:string,arg2?:string,arg3?:string):void{
    if(arg1 !=undefined){
        document.write(arg1+"<br>");
    }
    if(arg2 !=undefined){
        document.write(arg2+"<br>");
    };
    if(arg3 !=undefined){
        document.write(arg3+"<br>");
    }
};
fun_four();
fun_four("Angular7","nodejs","mongodb");
fun_four("nagularjs",undefined,"couchDB");



function fun_five(arg1:string,arg2?:string,...arg3:string[]):void{
    document.write(arg1+"<br>"+arg2+"<br>");
    for(var i:number=0;i<arg3.length;i++){
        document.write(arg3[i]+"<br>");
    }
};
fun_five("mongobd",undefined,"mysqul","BD");


function fun_six(arg1:string="angular",arg2:string,arg3:string):void{
    document.write(arg1+"<br>"+arg2+"<br>"+arg3+"<br>");
};
fun_six(undefined,"nodeJs","mysqul");
fun_six("anuglarjs","Angular","MongoBD");


function fun_seven(arg1:string,arg2:string="angularjs"):void{
    document.write(arg1+"<br>"+arg2+"<br>");
};  
fun_seven("hello",undefined);
fun_seven("afpa","kkfoajo");

// if we dont mention [] it showing error
function fun_eight(arg1:string,arg2:string="fasak",arg3?:string,...arg4:string[]):void{
    document.write(arg1+"<br>"+arg2+"<br>"+arg3+"<br>"+arg4+"<br>")
};
fun_eight("mmmmm",undefined,undefined,"nnnnnn","xxxxxxxxx","zzzzzzzz");

