import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/database/entities/orders';
import { UserEntity } from 'src/database/entities/users';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule,
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [
    JwtModule
  ]
})
export class AuthModule {}
