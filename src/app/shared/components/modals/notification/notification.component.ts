import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  displayModal : boolean = true;
  isSuccess: boolean = true;
  title: string = "Titre pas défaut";
  message: string = "Message par défaut";

  constructor(public dynamicModalRef: DynamicDialogRef, private config: DynamicDialogConfig) {
    this.title = config.data.title;
    this.message = config.data.message;
    this.isSuccess = config.data.isSuccess;
  }

  close(){
    this.dynamicModalRef.close();
  }
}
