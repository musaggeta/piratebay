import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import {Observable} from 'rxjs';

@Injectable()
export class ServiceService {


  constructor(private http:HttpClient) { }
  getUsers() {
    return this.http.get('localhost:5432/piratebay_db');
  }

  loginuser(username: string, password: string): Observable<any> {
    const url_api = 'localhost:5432/piratebay_db';
    return this.http
      .post (
        url_api,
        { username, password }, { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+'/'+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+'/'+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+'/'+persona.id);
  }
}
