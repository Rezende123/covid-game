import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalMessageComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
