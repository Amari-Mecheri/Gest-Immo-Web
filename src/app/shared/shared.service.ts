import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotificationComponent } from './components/modals/notification/notification.component';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  dynamicModalRef?: DynamicDialogRef;

  constructor(private modalService: DialogService) {}

  showNotification(isSuccess: boolean, title: string, message: string): void {
    const initialState = {
        isSuccess: isSuccess,
        title: title,
        message: message,
    };

    this.dynamicModalRef = this.modalService.open(NotificationComponent, {
      header: title,
      width: '50%',
      data: initialState,
      showHeader:false,
    });
  }
}
