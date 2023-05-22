import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = "https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail";

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  post(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  put(data: any): Observable<any> {
    return this.http.put(this.url, data);
  }

  delete(): Observable<any> {
    return this.http.delete(this.url);
  }
}
