import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/models/interfaces';
import { GetOrdersResponseDto } from './dto/get-orders-response.dto';
import { PostOrdersRequestDto } from './dto/post-orders-request.dto';
import { OrdersService } from './orders.service';

@Controller('api/orders')
export class OrdersController {

  constructor (
    private readonly ordersService: OrdersService
  ) {}

  @Roles(Role.Admin)
  @Get('')
  getOrders(): Promise<GetOrdersResponseDto> {
    return this.ordersService.getAll()
  }

  @Public()
  @Post('')
  add(@Body() data: PostOrdersRequestDto): Promise<void> {
    return this.ordersService.add(data)
  }

}
