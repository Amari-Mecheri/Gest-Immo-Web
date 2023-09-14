import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

const routes: Routes = [
  { path: '',component: LoginComponent},
  { path: 'account/login',component: LoginComponent},
  { path: 'account/register',component: RegisterComponent},
  { path: 'account',loadChildren: () => import('./account/account.module').then(module =>module.AccountModule)},
  { path: 'not-found',component: NotFoundComponent},
  { path: '**',component:NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 