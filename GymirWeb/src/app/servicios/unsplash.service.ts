import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private accessKey = 'hiTc_GxuYcOpmU8pAYy_AxYTjQmo6_N24Pn-d1qHV4I';  // Clave API
  private apiUrl = 'https://api.unsplash.com/search/photos';

  constructor(private http: HttpClient) { }

  searchGymImages(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Client-ID ${this.accessKey}`
    });

    return this.http.get(this.apiUrl, { headers, params: { query, per_page: '10' } });
  }
}