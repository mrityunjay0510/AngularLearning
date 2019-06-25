import { OnInit, OnDestroy, Component } from "@angular/core";
import { AlertService } from "../_services";
import {  Subscription } from "rxjs";

@Component({ 
    selector: 'alert', 
    templateUrl: 'alert.component.html' 
})
export class AlertComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    message:string;
    constructor(private alertService:AlertService){   
    }
    ngOnInit(){
        this.subscription = this.alertService.getAleart()
        .subscribe(message =>{
            switch (message && message.type) {
                case 'success':       
                    message.cssClass = 'alert alert-success';
                    break;                                                               
                case 'error':     
                    message.cssClass = 'alert alert-danger';                                  
                    break;        
            }
            this.message=message;
        })
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}