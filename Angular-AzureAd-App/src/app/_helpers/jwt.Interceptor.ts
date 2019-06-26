import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthenticationService } from "../_services";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class JwtInterceptor implements HttpInterceptor{
    constructor(private authenticationService:AuthenticationService){}

    intercept(request:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        let currentUser=this.authenticationService.currentUserValue;
        if(currentUser && currentUser.token){
            request = request.clone({
                setHeaders:{
                    Authorization:`Bearer ${currentUser.token}`
                }
            })
        }
        return next.handle(request);
    }
}