import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporadasComponent } from '../temporadas/temporadas.component';
import { TemporadasModule } from '../temporadas/temporadas.module';



@NgModule({
  declarations: [TemporadasComponent],
  imports: [
    CommonModule,
    TemporadasModule
  ]
})
export class InicioModule { }
