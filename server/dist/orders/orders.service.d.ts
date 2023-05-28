import { GetOrdersResponseDto } from './dto/get-orders-response.dto';
import { Repository } from 'typeorm';
import { PostOrdersRequestDto } from './dto/post-orders-request.dto';
import { OrderEntity } from 'src/database/entities/orders';
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: Repository<OrderEntity>);
    add(item: PostOrdersRequestDto): Promise<void>;
    getAll(): Promise<GetOrdersResponseDto>;
}
