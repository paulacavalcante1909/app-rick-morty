import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  constructor(private http: HttpClient) { }
  private readonly Personagem = 'https://rickandmortyapi.com/api/character/'
  private readonly Episodio = 'https://rickandmortyapi.com/api/episode/'
  buscarPerson(param){
    return this.http.get(this.Personagem+param)
  }

  buscarEpisodio(param){
    return this.http.get(this.Episodio+param)
  }
}

