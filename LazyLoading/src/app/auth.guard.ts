import{Injectable} from "@angular/core";
import { CanLoad } from '@angular/router';
@Injectable()
export class authGuard implements CanLoad{
    // CanLoad guard is used to decide if a module can be loaded or not configured with loadChildren property.
    // CanLoad is an interface with canLoad method
    canLoad():boolean{
        return confirm("Do you want to enter into lazy loading.....?");
    };
};

//canActivate - is used to prevent unauthorized users from accessing certain routes. 
//See docs for more info.

//canLoad - is used to prevent the application from loading entire modules lazily 
//if the user is not authorized to do so