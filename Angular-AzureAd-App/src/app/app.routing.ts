import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { MsalGuard } from '@azure/msal-angular';

const routes : Routes =[
    { path:'', component:HomeComponent ,canActivate:[AuthGuard]},
    { path:'register', component:RegisterComponent},
    { path:'login' , component:LoginComponent,canActivate : [AuthGuard]},
    {path:'**', redirectTo:''}
];


export  const appRoutingModule = RouterModule.forRoot(routes);