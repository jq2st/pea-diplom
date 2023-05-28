import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { OrderEntity } from 'src/database/entities/orders';
import { UserEntity } from 'src/database/entities/users';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [
    TypeOrmModule
  ]
})
export class UsersModule {}
