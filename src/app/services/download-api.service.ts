import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DownloadApiService {

  api = '/api/download'

  constructor(private http: HttpClient) { }

  downloadConditions(): Observable<Blob> {
    const result = this.http.get(`${this.api}/conditions`, {responseType: 'blob'})
    return result
  }

}
