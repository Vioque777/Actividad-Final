import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private httpClient: HttpClient) { }

  listarPersonajes():Observable<any> {
    return this.httpClient.get("https://rickandmortyapi.com/api/character");
  }
  busquedas():Observable<any> {
    return this.httpClient.get("https://rickandmortyapi.com/api/location");
  }
  bienbenida():Observable<any> {
    return this.httpClient.get("http://localhost:3000/usuario");
  }
}
