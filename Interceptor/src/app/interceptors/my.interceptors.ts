import{Injectable} from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MyInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        console.log("-- in interceptor --");
        return handler.handle(req);
    }
}