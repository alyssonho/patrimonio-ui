import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itensUrl = 'http://localhost:8080/itens';
  constructor(private http: HttpClient) {}
  listar(){
    return this.http.get<any[]>(this.itensUrl)
  }
}
