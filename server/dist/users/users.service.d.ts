import { Repository } from 'typeorm';
import { UserEntity } from 'src/database/entities/users';
import { GetUserResponseDto } from './dto/get-user-response.dto';
import { GetUsersResponseDto } from './dto/get-users-response.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getSelf(userId: number): Promise<GetUserResponseDto>;
    getAll(): Promise<GetUsersResponseDto>;
}
