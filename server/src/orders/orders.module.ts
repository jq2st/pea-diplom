import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/orders';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity])
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
