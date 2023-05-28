import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatalogModule } from './catalog/catalog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CatalogEntity } from './database/entities/catalog';
import { OrderEntity } from './database/entities/orders';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './database/entities/users';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    CatalogModule,
    OrdersModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'administrator',
      database: 'diplom',
      entities: [CatalogEntity, OrderEntity, UserEntity],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {

  constructor(private dataSource: DataSource) {}
}
