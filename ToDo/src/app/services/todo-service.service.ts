import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  itemUrl = "http://dummy.restapiexample.com/api/v1/employees";
  private httpClient: HttpClient;
  constructor(http: HttpClient) {
    this.httpClient = http;
  }
  getItems(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.itemUrl);
 }
}
