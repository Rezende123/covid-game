import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidGameComponent } from './covid-game.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalMessageComponent } from './modal-message/modal-message.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CovidGameComponent,
    ModalMessageComponent
  ],
  exports: [
    CovidGameComponent
  ]
})
export class CovidGameModule { }
