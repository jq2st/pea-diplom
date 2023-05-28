import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/models/interfaces';
import { CatalogService } from './catalog.service';
import { GetCatalogItemResponseDto } from './dto/get-catalog-item-response.dto';
import { GetCatalogResponseDto } from './dto/get-catalog-response.dto';
import { PostCatalogRequestDto } from './dto/post-catalog-request.dto';

@Controller('api/catalog')
export class CatalogController {

  constructor (
    private readonly catalogService: CatalogService
  ) {}

  @Public()
  @Get('')
  getCatalog(@Query('brand') brand, @Query('model') model): Promise<GetCatalogResponseDto> {
    console.log("brand", brand, model)
    return this.catalogService.getAll(brand, model)
  }

  @Public()
  @Get(':id')
  getItem(@Param('id') id: string): Promise<GetCatalogItemResponseDto> {
    return this.catalogService.get(+id)
  }

  @Roles(Role.Admin)
  @Post('')
  add(@Body() data: PostCatalogRequestDto): Promise<void> {
    return this.catalogService.add(data)
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.catalogService.remove(+id)
  }

}
