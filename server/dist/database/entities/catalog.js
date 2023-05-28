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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogEntity = void 0;
const typeorm_1 = require("typeorm");
let CatalogEntity = class CatalogEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CatalogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CatalogEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "mass", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CatalogEntity.prototype, "volume", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "shape", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "fuel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CatalogEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CatalogEntity.prototype, "price", void 0);
CatalogEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'catalog' })
], CatalogEntity);
exports.CatalogEntity = CatalogEntity;
//# sourceMappingURL=catalog.js.map