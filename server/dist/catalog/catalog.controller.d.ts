import { CatalogService } from './catalog.service';
import { GetCatalogItemResponseDto } from './dto/get-catalog-item-response.dto';
import { GetCatalogResponseDto } from './dto/get-catalog-response.dto';
import { PostCatalogRequestDto } from './dto/post-catalog-request.dto';
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    getCatalog(brand: any, model: any): Promise<GetCatalogResponseDto>;
    getItem(id: string): Promise<GetCatalogItemResponseDto>;
    add(data: PostCatalogRequestDto): Promise<void>;
    remove(id: string): Promise<void>;
}
