import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private accountService:AccountService){}

  ngOnInit(): void {
    // this.accountService.user$.subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     if(response === null){
    //     this.router.navigateByUrl('/account/login');
    //   }},
    // })
    // this.router.navigateByUrl('/account/login');
  }

}
