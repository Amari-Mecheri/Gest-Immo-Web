import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }

  getCollaborators(){
    return this.http.get(`${environment.appUrl}/api/agence/get-collaborators`);
  }
}
