import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/database/entities/users';
import { GetUserResponseDto } from './dto/get-user-response.dto';
import { GetUsersResponseDto } from './dto/get-users-response.dto';

@Injectable()
export class UsersService {

  constructor( 
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  async getSelf(userId: number): Promise<GetUserResponseDto> {
    const options = {
      where: {
        id: userId
      }
    }
    const user: UserEntity = await this.usersRepository.findOne(options)
    const result: GetUserResponseDto = {
      id: user.id,
      login: user.login,
      name: user.name,
      phone: user.phone,
      isAdmin: user.isAdmin
    }
    return result
  }

  async getAll(): Promise<GetUsersResponseDto> {
    const catalogResult = await this.usersRepository.find()
    const result = {
      users: catalogResult
    }
    return result
  }

}