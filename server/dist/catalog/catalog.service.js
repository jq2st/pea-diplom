"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const catalog_1 = require("../database/entities/catalog");
const typeorm_2 = require("typeorm");
let CatalogService = class CatalogService {
    constructor(catalogRepository) {
        this.catalogRepository = catalogRepository;
    }
    async add(item) {
        try {
            const catalogEntity = this.catalogRepository.create(Object.assign({}, item));
            await this.catalogRepository.save(catalogEntity);
            return Promise.resolve();
        }
        catch (error) {
            console.log(error);
            return Promise.reject();
        }
    }
    async get(id) {
        const catalogResult = await this.catalogRepository.findOne({ where: { id } });
        return catalogResult;
    }
    async getAll(brand, model) {
        const where = {
            brand: (0, typeorm_2.Like)(`%${brand}%`),
            model: (0, typeorm_2.Like)(`%${model}%`)
        };
        const catalogResult = await this.catalogRepository.findBy(where);
        const result = {
            catalog: catalogResult
        };
        return result;
    }
    async remove(id) {
        await this.catalogRepository.delete({ id: id });
    }
};
CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(catalog_1.CatalogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CatalogService);
exports.CatalogService = CatalogService;
//# sourceMappingURL=catalog.service.js.map