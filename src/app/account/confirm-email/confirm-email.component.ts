import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmEmail } from 'src/app/shared/models/account/confirmEmail';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css'],
})
export class ConfirmEmailComponent implements OnInit {
  success = true;

  constructor(
    private accountService: AccountService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next: (params: any) => {
        const confirmEmail: ConfirmEmail = {
          token: params.get('token'),
          email: params.get('email'),
        };

        console.log(confirmEmail);
        this.accountService.confirmEmail(confirmEmail).subscribe({
          next: (response: any)=>{
            this.sharedService.showNotification(true,response.value.title,response.value.message);
          }, error: error => {
            this.success = false;
            this.sharedService.showNotification(false,'failed',error.error);
          }
        })
      },
    });
  }

  resendEmailConfirmationLink(){
    this.router.navigateByUrl('/account/send-email/resend-email-confirmation-link');
  }
}
