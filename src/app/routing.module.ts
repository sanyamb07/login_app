import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfComponent } from './prof.component';
 
 const routes: Routes = [
   {path: "login", component: LoginComponent},
   {path: "profile", component: ProfComponent, canActivate:[ AuthGuard] },
   {path: '', redirectTo: "login", pathMatch: 'full'}

 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }