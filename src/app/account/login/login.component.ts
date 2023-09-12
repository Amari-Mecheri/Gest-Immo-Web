import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {
  loginForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  errorMessages: string[] = [];
  
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngAfterViewInit(): void {
    // this.sharedService.showNotification(true, "ecran de login", "ceci est un test de notification");
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  login(){
    this.submitted = true;
    this.errorMessages = [];

    // if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: (response:any) => {
          // this.sharedService.showNotification(true, response.value.title, response.value.message);
          this.router.navigateByUrl('/login');
          console.log(response);
        },
        error: (error) => {
          if(error.error.errors){
            this.errorMessages=error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        },
      });
    // }

  }
}
