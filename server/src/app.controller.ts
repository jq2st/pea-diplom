import { Controller, Get } from '@nestjs/common';
import { Public } from './decorators/public.decorator';

@Controller()
export class AppController {

  @Public()
  @Get()
  getHello(): string {
    return '0.0.0'
  }
}
