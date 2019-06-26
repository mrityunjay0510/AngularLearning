import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService , AlertService } from '../_services';
import { first } from 'rxjs/operators';

@Component({ 
    templateUrl: 'login.component.html' 
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    loding:boolean=false;
    submitted:boolean=false;
    returnUrl:string;
    error:string;
    success: string;

    constructor(
        private formBuilder:FormBuilder,
        private route:ActivatedRoute,
        private router:Router,
        private authenticationService:AuthenticationService,
        private alertService:AlertService
    ){
        if(this.authenticationService.currentUserValue){
            this.router.navigate(['/']);
        }
    }

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            username :['',Validators.required],
            password:['',Validators.required]
        });

        this.returnUrl =this.route.snapshot.queryParams['returnUrl'] ||'/';
    }

    get f(){ return this.loginForm.controls; }

    onSubmit(){
        this.submitted=true;

        this.alertService.clear();

        if(this.loginForm.invalid){
            return;
        }

        this.loding =true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe( data=>{
            this.router.navigate([this.returnUrl]);
        },
         error=>{
            this.alertService.error(error);
             this.loding=false;
         }
        )
    }
}