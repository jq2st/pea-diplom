import { GetCatalogResponseDto } from './dto/get-catalog-response.dto';
import { CatalogEntity } from 'src/database/entities/catalog';
import { Repository } from 'typeorm';
import { PostCatalogRequestDto } from './dto/post-catalog-request.dto';
import { GetCatalogItemResponseDto } from './dto/get-catalog-item-response.dto';
export declare class CatalogService {
    private catalogRepository;
    constructor(catalogRepository: Repository<CatalogEntity>);
    add(item: PostCatalogRequestDto): Promise<void>;
    get(id: number): Promise<GetCatalogItemResponseDto>;
    getAll(brand: string, model: string): Promise<GetCatalogResponseDto>;
    remove(id: number): Promise<void>;
}
