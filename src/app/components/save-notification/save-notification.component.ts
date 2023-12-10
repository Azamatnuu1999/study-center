import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-notification',
  templateUrl: './save-notification.component.html',
  styleUrls: ['./save-notification.component.css']
})
export class SaveNotificationComponent {
  snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    
  }
}