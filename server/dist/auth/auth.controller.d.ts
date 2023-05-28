import { AuthService } from './auth.service';
import { PostLoginRequestDto } from './dto/post-login-request.dto';
import { PostLoginResponseDto } from './dto/post-login-response.dto';
import { PostRegistrationRequestDto } from './dto/post-registration-request.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: PostLoginRequestDto): Promise<PostLoginResponseDto>;
    register(body: PostRegistrationRequestDto): Promise<{}>;
}
