import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{


    private token = '123456';

    intercept(req: HttpRequest<any>, next:HttpHandler){

        req = req.clone({
            setHeaders: {
                'Content-Type' : 'application/json; charset=utf-8',
                'Accept'       : 'application/json',
                'Token': this.token,
            }
        });
        console.log(req);
        
        return next.handle(req)
    }
}