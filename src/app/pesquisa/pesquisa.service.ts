import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
private readonly API = 'https://rickandmortyapi.com/api/character/?name='
constructor(private http: HttpClient) { }

  pesquisa(param){
    return this.http.get(this.API+param)
    .pipe(
      catchError(this.handleError))
    
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
       
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  };
}
