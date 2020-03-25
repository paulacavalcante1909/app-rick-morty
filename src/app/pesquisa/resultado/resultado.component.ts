import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultadoService } from './resultado.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ResultadoService) { }
  episodios: any = [];
  personagem: any;
 
  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      if (parametros['id']) {
        this.service.buscarPerson(parametros.id).subscribe(result => {
          this.personagem = <any>result;
          this.buscarEpisodio();
        }
        );
        
      }

    })

    
  }


  buscarEpisodio(){
    let listaEpisodio:any = []
    for (let i= 0; i < this.personagem.episode.length; i++) {
      listaEpisodio[i] = this.personagem.episode[i].substring(this.personagem.episode[i].indexOf("episode/") + 8);
      this.service.buscarEpisodio(listaEpisodio[i]).subscribe(result => {
       let re = <any>result;
        this.episodios.push(re)
        
      }
      );
    }
  }

  Url = function(urlString) {
    var _params = {};
   
    urlString.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(match, key, value) {
        _params[key] = value;
    });
   
    this.param = function(paramName) {
      return _params[paramName];
    };
  };

  

}
