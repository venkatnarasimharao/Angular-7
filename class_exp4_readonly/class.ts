class cls_one{
    readonly var_one:string;
    constructor(public arg1:string){
        this.var_one=arg1;
    };
};
var obj:cls_one=new cls_one("Narasimha");
document.write( obj.var_one);