import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { User } from 'src/app/shared/models/account/user';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
  emailForm: FormGroup = new FormGroup({});
  submitted = false;
  mode: string | undefined;
  errorMessages: string[] = [];

  constructor(
    private accountService: AccountService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // On gère deux cas d'envoi d'email: renvoi d'email de confirmation ou perte d'identifiants
    // On récupère le mode à partir de l'url afin de déterminer le cas présent
    // si l'utilisateur est connecté on revient à la page d'accueil
    this.accountService.user$.pipe(take(1)).subscribe({
      next: (user: User | null) => {
        if (user) {
          this.router.navigateByUrl('/');
        } else {
          const mode = this.activatedRoute.snapshot.paramMap.get('mode');
          if (mode) {
            this.mode = mode;
            this.initializeForm();
          }
        }
      },
    });
  }

  initializeForm() {
    this.emailForm = this.formBuilder.group({
      email: ['',[
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
    });
  }

  sendEmail() {
    // envoie un email pour le réenvoi de l'email de confirmation
    // ou la perte d'identifiants
    // la valeur de this.mode détermine le type d'envoi
    this.submitted = true;
    this.errorMessages = [];

    if (this.emailForm.valid && this.mode)
      if (this.mode.includes('resend-email-confirmation-link')) {
        this.accountService
          .resendEmailConfirmationLink(this.emailForm.get('email')?.value)
          .subscribe({
            next: (response: any) => {
              this.sharedService.showNotification(
                true,
                response.value.title,
                response.value.message
              );
              this.router.navigateByUrl('/account/login');
            },
            error: (error) => {
              if (error.error.errors) {
                this.errorMessages = error.error.errors;
              } else {
                this.errorMessages.push(error.error);
              }
            },
          });
      } else if (this.mode.includes('forgot-username-or-password')) {
        this.accountService
          .forgotUsernameOrPassword(this.emailForm.get('email')?.value)
          .subscribe({
            next: (response: any) => {
              this.sharedService.showNotification(
                true,
                response.value.title,
                response.value.message
              );
              this.router.navigateByUrl('/account/login');
            },
            error: (error) => {
              if (error.error.errors) {
                this.errorMessages = error.error.errors;
              } else {
                this.errorMessages.push(error.error);
              }
            },
          });
      }
  }

  cancel() {
    this.router.navigateByUrl('/account/login');
  }
}
