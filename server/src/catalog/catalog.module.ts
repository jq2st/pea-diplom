import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CatalogEntity } from 'src/database/entities/catalog';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([CatalogEntity])
  ],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
