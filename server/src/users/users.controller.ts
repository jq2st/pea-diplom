import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { IRequstWithUserData, Role } from 'src/models/interfaces';
import { GetUserResponseDto } from './dto/get-user-response.dto';
import { GetUsersResponseDto } from './dto/get-users-response.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {

  constructor (
    private readonly usersService: UsersService
  ) {}

  @Roles(Role.Admin)
  @Get('')
  getUsers(): Promise<GetUsersResponseDto> {
    return this.usersService.getAll()
  }

  @Get('self')
  getSelf(@Req() request: IRequstWithUserData): Promise<GetUserResponseDto> {
    const userId = request.userId
    return this.usersService.getSelf(userId)
  }
  
}
