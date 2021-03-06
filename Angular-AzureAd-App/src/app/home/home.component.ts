import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';

@Component({ 
    templateUrl: 'home.component.html' 
})
export class HomeComponent implements OnInit {
    currentUser:any;
    users=[];
    constructor(private authenticationService :AuthenticationService, private userService:UserService){
        this.currentUser=authenticationService.currentUserValue;
    }

    ngOnInit(){
        this.loadAllUsers()
    }

    loadAllUsers(){
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id){
        this.userService.delete(id)
        .pipe(first())
        .subscribe(()=>this.loadAllUsers());
    }
}