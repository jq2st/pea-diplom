import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { GetOrdersResponseDto } from './dto/get-orders-response.dto';
import { PostOrdersRequestDto } from './dto/post-orders-request.dto';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  api = 'http://localhost:3000/api/orders'

  constructor(private http: HttpClient) { }

  getOrders(): Observable<GetOrdersResponseDto> {
    const result = this.http.get<GetOrdersResponseDto>(`${this.api}`)
    return result
  }

  addOrder(data: PostOrdersRequestDto): Observable<{}> {
    const result = this.http.post<{}>(`${this.api}`, data)
    return result
  }

}
