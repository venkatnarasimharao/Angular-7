//import Injectable
//Injection is the predefined class
//Injectable is used to create the custom service

import{Injectable} from "@angular/core";
//use Injectable
@Injectable()

//export class 

export class myservice{
      public mySQLData():string{
          return "mysql data soon.......!";
      };
      public mongoDBData():string{
          return "mongoBD data soon......!";
      };
};
