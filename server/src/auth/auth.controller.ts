import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';
import { PostLoginRequestDto } from './dto/post-login-request.dto';
import { PostLoginResponseDto } from './dto/post-login-response.dto';
import { PostRegistrationRequestDto } from './dto/post-registration-request.dto';

@Controller('api/auth')
export class AuthController {

  constructor (
    private readonly authService: AuthService
  ) {}

  @Public()
  @Post('login')
  login(@Body() body: PostLoginRequestDto): Promise<PostLoginResponseDto> {
    return this.authService.login(body)
  }

  @Public()
  @Post('registration')
  register(@Body() body: PostRegistrationRequestDto): Promise<{}> {
    return this.authService.register(body)
  }
  
}
