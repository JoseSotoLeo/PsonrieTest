import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PsyProfileComponent } from './components/psy-profile/psy-profile.component';
import { AuthGuard } from './helpers/guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mainView', component: MainViewComponent, canActivate: [AuthGuard]},
  {path: 'profiles/:id', component: PsyProfileComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }