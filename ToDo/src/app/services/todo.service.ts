import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  itemUrl = "https://jsonplaceholder.typicode.com/todos";
  
  constructor(private httpClient: HttpClient) {
  }
  getToDos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.itemUrl);
 }
}
