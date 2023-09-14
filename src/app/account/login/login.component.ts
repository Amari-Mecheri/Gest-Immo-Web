import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

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
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngAfterViewInit(): void {
  //  this.sharedService.showNotification(true, "ecran de login", this.accountService.user$ !=null ? "null": this.accountService.user$);
   //console.log(this.accountService.user$);
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

    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: (response:any) => {
          // console.log(response);
        },
        error: (error) => {
          if(error.error.errors){
            this.errorMessages=error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        },
      });
    }

  }
}
