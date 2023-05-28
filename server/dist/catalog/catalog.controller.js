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
exports.CatalogController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../decorators/public.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const interfaces_1 = require("../models/interfaces");
const catalog_service_1 = require("./catalog.service");
const post_catalog_request_dto_1 = require("./dto/post-catalog-request.dto");
let CatalogController = class CatalogController {
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    getCatalog(brand, model) {
        console.log("brand", brand, model);
        return this.catalogService.getAll(brand, model);
    }
    getItem(id) {
        return this.catalogService.get(+id);
    }
    add(data) {
        return this.catalogService.add(data);
    }
    remove(id) {
        return this.catalogService.remove(+id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('brand')),
    __param(1, (0, common_1.Query)('model')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "getCatalog", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "getItem", null);
__decorate([
    (0, roles_decorator_1.Roles)(interfaces_1.Role.Admin),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_catalog_request_dto_1.PostCatalogRequestDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "add", null);
__decorate([
    (0, roles_decorator_1.Roles)(interfaces_1.Role.Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "remove", null);
CatalogController = __decorate([
    (0, common_1.Controller)('api/catalog'),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
exports.CatalogController = CatalogController;
//# sourceMappingURL=catalog.controller.js.map