import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DownloadApiService {

  api = '/api/download'

  constructor(private http: HttpClient) { }

  downloadConditions(): Observable<any> {
    const result = this.http.get<any>(`${this.api}/conditions`)
    return result
  }

}
