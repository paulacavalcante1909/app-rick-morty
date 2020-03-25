import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoRouting } from './resultado.routing';
import { ResultadoComponent } from './resultado.component';



@NgModule({
  declarations: [ResultadoComponent],
  imports: [
    CommonModule,
    ResultadoRouting
  ]
})
export class ResultadoModule { }
