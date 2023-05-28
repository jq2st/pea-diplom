import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return '0.0.0'
  }
}
