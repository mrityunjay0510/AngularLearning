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
import { MsalModule } from '@azure/msal-angular';
import { environment } from '@environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        appRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MsalModule.forRoot({
            clientID: environment.clientID,
            authority: "https://login.microsoftonline.com/shivanshi2002.onmicrosoft.com/",
            redirectUri: "http://localhost:4200",
            validateAuthority : true,
            cacheLocation : "localStorage",
            postLogoutRedirectUri: "http://localhost:4200/",
            navigateToLoginRequestUrl : true,
            popUp: true,
            consentScopes: ["user.read", "api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"],
            unprotectedResources: ["https://angularjs.org/"],        
            correlationId: '1234',    
            piiLoggingEnabled: true,
        })
    ],
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