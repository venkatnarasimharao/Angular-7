/*
var data:any={
    sub_one:"AngularJs",
    sub_two:"Angular"
};
document.write(data.sub_one+"<br>"+data.sub_two);


var data:any={
    Login:Login,
    Logout:Logout,
    setCredentials:setCredentials,
    clearCredentials:clearCredentials
};
function Login():string{
    return "welcome to login module.........!";
};
function Logout():string{
    return "welcome to Logout module.........!";
};
function setCredentials():string{
    return "welcome to setCredentials module.........!";
};
function clearCredentials():string{
    return "welcome to clearCredentials module.........!";
};
document.write(data.Login()+"<br>"+data.Logout()+"<br>"+data.setCredentials()+"<br>"+data.clearCredentials());

*/
var data = {
    orcle: function () {
        return "oracle .............!";
    },
    mysql: function () {
        return "mysql .............!";
    },
    mongoBD: function () {
        return "mongoBD .............!";
    }
};
document.write(data.orcle() + "<br>" + data.mysql() + "<br>" + data.mongoBD());
