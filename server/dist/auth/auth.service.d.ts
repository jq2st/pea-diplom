import { PostLoginRequestDto } from './dto/post-login-request.dto';
import { Repository } from 'typeorm';
import { PostLoginResponseDto } from './dto/post-login-response.dto';
import { UserEntity } from 'src/database/entities/users';
import { JwtService } from '@nestjs/jwt';
import { PostRegistrationRequestDto } from './dto/post-registration-request.dto';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<UserEntity>, jwtService: JwtService);
    login(data: PostLoginRequestDto): Promise<PostLoginResponseDto>;
    register(data: PostRegistrationRequestDto, isAdmin?: boolean): Promise<{}>;
}
