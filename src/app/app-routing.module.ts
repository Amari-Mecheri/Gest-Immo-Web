import { NgModule, inject } from '@angular/core';
import { ExtraOptions, Router, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountService } from './account/account.service';
import { take } from 'rxjs';
import { User } from './shared/models/user';
import { AgenceComponent } from './agence/agence.component';
import { authorizationGuard } from './shared/guards/authorization.guard';

// isLogedIn and isNotLoggedIn were guards that were meant to
// redirected a not logged in user to the login form but it this is now
// handled in the app-component which adds an event handler
// to the route NavigationStart event
// they are kept here in case of future needs
export const isLogedIn = () => {
  // const router = inject(Router);
  // const accountService = inject(AccountService);
  // accountService.user$.pipe(take(1)).subscribe({
  //   next: (user: User | null) => {
  //     if (user === null) {
  //       router.navigateByUrl('/account/login');
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   },
  // });
};
export const isNotLogedIn = () => {
  // const router = inject(Router);
  // const accountService = inject(AccountService);
  // accountService.user$.pipe(take(1)).subscribe({
  //   next: (user: User | null) => {
  //     if (user) {
  //       router.navigateByUrl('/');
  //       return false;
  //     } else return true;
  //   },
  // });
};
const options: ExtraOptions = {
  // onSameUrlNavigation: 'reload',
};
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [isLogedIn],
    // runGuardsAndResolvers: 'always',
  },
  {
    path: 'account/login',
    component: LoginComponent,
    // canActivate: [isNotLogedIn],
    // runGuardsAndResolvers: 'always',
  },
  { path: 'account/register', component: RegisterComponent },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((module) => module.AccountModule),
  },
  //  { path: 'agence/collaborateurs', component: AgenceComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authorizationGuard],
    children: [{ path: 'agence/collaborateurs', component: AgenceComponent }],
  },
  { path: 'agence/informations-generales', component: RegisterComponent },

  {
    path: 'not-found',
    component: NotFoundComponent,
    // canActivate: [isLogedIn],
    // runGuardsAndResolvers: 'always',
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
    // canActivate: [isLogedIn],
    // runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
