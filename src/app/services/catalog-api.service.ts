import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarCard } from '../models/models';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { GetCatalogResponseDto } from './dto/get-catalog-response.dto';
import { PostCatalogRequestDto } from './dto/post-catalog-request.dto';

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {

  api = 'http://localhost:3000/api/catalog'

  constructor(private http: HttpClient) { }

  getCars(brand: string = '', model: string = ''): Observable<GetCatalogResponseDto> {
    const result = this.http.get<GetCatalogResponseDto>(`${this.api}?brand=${brand}&model=${model}`)
    return result
  }

  getCar(id: number): Observable<CarCard> {
    const result = this.http.get<CarCard>(`${this.api}/${id}`)
    return result
  }

  addCar(data: PostCatalogRequestDto): Observable<{}> {
    const result = this.http.post<{}>(`${this.api}`, data)
    return result
  }

  removeCar(id: number): Observable<{}> {
    const result = this.http.delete<{}>(`${this.api}/${id}`)
    return result
  }

}
