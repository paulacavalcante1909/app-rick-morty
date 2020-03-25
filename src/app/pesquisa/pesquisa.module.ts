import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaRouting } from './pesquisa.routing';
import { PesquisaComponent } from './pesquisa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from '../inicio/inicio.component';
import { TemporadasComponent } from '../temporadas/temporadas.component';
import { TemporadasModule } from '../temporadas/temporadas.module';



@NgModule({
  declarations: [PesquisaComponent,InicioComponent,TemporadasComponent],
  imports: [
    CommonModule,
    PesquisaRouting,
    NgbModule,
    FormsModule,
    TemporadasModule
  ]
})
export class PesquisaModule { }
