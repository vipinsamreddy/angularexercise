// src/app/services/http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = 'https://localhost:7024/TruProxyAPI/rest/Companies/v1';
  constructor(private http: HttpClient) { }

  get<T>(route: string): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': '',
    });
    return this.http.get<T>(`${this.baseUrl}/${route}`, { headers });
  }
}
