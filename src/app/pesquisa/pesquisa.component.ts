import { Component, OnInit, PipeTransform } from '@angular/core';
import { PesquisaService } from './pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
  
})
export class PesquisaComponent implements OnInit{
  

  constructor(private service: PesquisaService, ) {}
ngOnInit(){

}

results = true;
erro = false;
escondeResults(param){
this.results = param
}
  personagens;
  Pesquisa(param){
    this.service.pesquisa(param).subscribe(result => {
        this.personagens = <any>result
        this.personagens =  this.personagens.results
        this.erro = false
    },
    err => this.erro = true
    )
  }
  

}
