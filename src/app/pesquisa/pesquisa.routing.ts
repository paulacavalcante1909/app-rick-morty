import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaComponent } from './pesquisa.component';


const routes: Routes = [
    {
        path: '',
        component: PesquisaComponent,
        children: [
            { path: 'resultado/:id', loadChildren:  ()=> import('./resultado/resultado.module').then(m => m.ResultadoModule)},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PesquisaRouting {
}
