import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DownloadController } from './download.controller';
import { UsersService } from './download.service';

@Module({
  imports: [
  ],
  controllers: [DownloadController],
  providers: [UsersService],
  exports: [
  ]
})
export class DownloadModule {}
