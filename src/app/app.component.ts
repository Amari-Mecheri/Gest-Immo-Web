import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { NavigationStart, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { User } from './shared/models/account/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {
    // dès que l'utilisateur est déconnecté on revient sur la page de login
    let userWasConnected = false;
    this.accountService.user$.subscribe({
      next: (user) => {
        if (user === null) {
          if (userWasConnected) this.router.navigateByUrl('/account/login');
          userWasConnected = false;
        } else userWasConnected = true;
      },
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        // pour naviguer il faut être connecté sinon retour à la page de login
        console.log((event as NavigationStart).url);

        if (!(event as NavigationStart).url.includes('/account/')) {
          accountService.user$.pipe(take(1)).subscribe({
            next: (user: User | null) => {
              if (user === null) {
                router.navigateByUrl('/account/login');
              } else {
              }
            },
          });
        }
      });
  }

  ngOnInit(): void {
    this.refreshUser();
  }

  refreshUser(): void {
    const jwt = this.accountService.getJWT();
    if (jwt) {
      this.accountService.refreshUser(jwt).subscribe({
        next: (_) => {},
        error: (_) => {
          this.accountService.logout();
        },
      });
    } else {
      this.accountService.refreshUser(null).subscribe();
    }
  }
}
