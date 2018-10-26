import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IrctcModule } from '../irctc/irctc.module';
import { FormService } from './form.service';

@NgModule({
  imports: [
    CommonModule,IrctcModule
  ],
  declarations: [],
  exports:[IrctcModule],
  providers:[FormService]
})
export class CoreModule { }
