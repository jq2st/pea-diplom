import { Injectable } from '@nestjs/common';
import { GetCatalogResponseDto } from './dto/get-catalog-response.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { CatalogEntity } from 'src/database/entities/catalog';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { PostCatalogRequestDto } from './dto/post-catalog-request.dto';
import { GetCatalogItemResponseDto } from './dto/get-catalog-item-response.dto';

@Injectable()
export class CatalogService {

  constructor( 
    @InjectRepository(CatalogEntity)
    private catalogRepository: Repository<CatalogEntity>
  ) {}

  async add(item: PostCatalogRequestDto) {
    try {
      const catalogEntity = this.catalogRepository.create({
        ...item
      })
      await this.catalogRepository.save(catalogEntity)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject()
    }
   
  }

  async get(id: number): Promise<GetCatalogItemResponseDto> {
    const catalogResult = await this.catalogRepository.findOne({where: {id}})
    return catalogResult
  }

  async getAll(brand: string, model: string): Promise<GetCatalogResponseDto> {
    const where: FindOptionsWhere<CatalogEntity> = {
      brand: Like(`%${brand}%`),
      model: Like(`%${model}%`)
    }
    const catalogResult = await this.catalogRepository.findBy(where)
    const result = {
      catalog: catalogResult
    }
    return result
  }

  async remove(id: number) {
    await this.catalogRepository.delete({id: id})
  }

}
