import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessagesComponent,
    NotificationComponent,
    
  ],
  providers: [DialogService],
  imports: [
    CommonModule,
    RouterModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    PanelModule
  ],
  exports: [
    RouterModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    PanelModule
  ],
})
export class SharedModule {}
