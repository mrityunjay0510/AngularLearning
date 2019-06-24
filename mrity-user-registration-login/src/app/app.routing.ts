import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';

const routes : Routes =[
    { path:'', component:HomeComponent },
    { path:'register', component:RegisterComponent},
    { path:'login' , component:LoginComponent},
    {path:'**', redirectTo:''}
];


export  const appRoutingModule = RouterModule.forRoot(routes);