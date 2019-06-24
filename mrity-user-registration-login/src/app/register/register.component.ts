import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({ 
    templateUrl: 'register.component.html' 
})
export class RegisterComponent implements OnInit {
    registerForm:FormGroup;
    loading=false;
    submitted=false;
    error:string;

    constructor(private formBuilder:FormBuilder,private router:Router,private authenticationService:AuthenticationService, private userService:UserService)
    {
        if(this.authenticationService.currentUserValue){
            this.router.navigate(['/'])
        }
    }
    
    ngOnInit(){
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit(){
        this.submitted=true;
        if(this.registerForm.invalid){
            return;
        }
        this.loading=true;

        this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data=>{
                this.router.navigate(['/login'],{ queryParams:{registered:true}})
            },
            error=>{
                this.error=error;
                this.loading=false;
                
            }
        )



    }

}