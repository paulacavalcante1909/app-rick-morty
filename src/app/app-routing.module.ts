import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


const routes: Routes = [
  { path: '', redirectTo: 'pesquisa', pathMatch: 'full' },
  {path:'inicio', component:InicioComponent,},
  {path:'pesquisa', loadChildren: ()=> import('./pesquisa/pesquisa.module').then(m => m.PesquisaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
