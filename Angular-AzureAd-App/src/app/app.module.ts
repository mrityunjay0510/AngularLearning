import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { appRoutingModule } from './app.routing';
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './_components';

@NgModule({
    imports: [
        BrowserModule,
        appRoutingModule,
        ReactiveFormsModule,
        HttpClientModule],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers:[
        { provide : HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true },
        { provide : HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true },
        fakeBackendProvider
    ]
})
export class AppModule { }