import { GetOrdersResponseDto } from './dto/get-orders-response.dto';
import { PostOrdersRequestDto } from './dto/post-orders-request.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<GetOrdersResponseDto>;
    add(data: PostOrdersRequestDto): Promise<void>;
}
