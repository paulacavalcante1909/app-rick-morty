import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemporadasService {
  constructor(private http: HttpClient) { }
  private readonly episodios = 'https://rickandmortyapi.com/api/episode/'

  

  buscarEpisodios(param) {
    return this.http.get(this.episodios+param)
  }

  temp_1 = [];
  temp_2 = [];
  temp_3 = [];
  re = []
  numTemp = []
  separaTemps() {
    for (let index = 1; index < 30; index++) {
      this.buscarEpisodios(index).subscribe(result => {
        this.re[index] = <any>result
        if(this.re[index].episode.substring(2,3) == '1'){
          this.temp_1.push(this.re[index].name)
        }
        else if(this.re[index].episode.substring(2,3) == '2'){
          this.temp_2.push(this.re[index].name)
        }
        else if(this.re[index].episode.substring(2,3) == '3'){
          this.temp_3.push(this.re[index].name)
        }

       }
       );
       
     
    }

  }



 
}
