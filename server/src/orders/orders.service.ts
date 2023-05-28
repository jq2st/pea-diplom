import { Injectable } from '@nestjs/common';
import { GetOrdersResponseDto } from './dto/get-orders-response.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostOrdersRequestDto } from './dto/post-orders-request.dto';
import { OrderEntity } from 'src/database/entities/orders';

@Injectable()
export class OrdersService {

  constructor( 
    @InjectRepository(OrderEntity)
    private ordersRepository: Repository<OrderEntity>
  ) {}

  async add(item: PostOrdersRequestDto) {
    try {
      const catalogEntity = this.ordersRepository.create({
        ...item
      })
      await this.ordersRepository.save(catalogEntity)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject()
    }
   
  }

  async getAll(): Promise<GetOrdersResponseDto> {
    const catalogResult = await this.ordersRepository.find()
    const result = {
      orders: catalogResult
    }
    return result
  }

}
