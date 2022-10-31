import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component' 
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  { path: 'login'   , component: LoginComponent },
  { path: 'principal'   , component: PrincipalComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
