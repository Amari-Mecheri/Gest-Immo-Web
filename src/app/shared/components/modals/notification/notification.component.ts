import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  displayModal : boolean = false;
  isSuccess: boolean = true;
  title: string = "";
  message: string = "";

  constructor() {

  }
}