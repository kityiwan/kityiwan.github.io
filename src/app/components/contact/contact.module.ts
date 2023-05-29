import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }