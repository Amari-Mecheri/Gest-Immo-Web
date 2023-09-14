import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  itemVisible: boolean = false;
  isCollapsed: boolean = true;

  constructor(public accountService: AccountService) {}

  ngOnInit() {
  }

  logout() {
    this.accountService.logout();
  }
}
