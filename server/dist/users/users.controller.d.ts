import { IRequstWithUserData } from 'src/models/interfaces';
import { GetUserResponseDto } from './dto/get-user-response.dto';
import { GetUsersResponseDto } from './dto/get-users-response.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<GetUsersResponseDto>;
    getSelf(request: IRequstWithUserData): Promise<GetUserResponseDto>;
}
