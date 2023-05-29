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
exports.DownloadController = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path_1 = require("path");
const public_decorator_1 = require("../decorators/public.decorator");
let DownloadController = class DownloadController {
    constructor() { }
    download(res) {
        const fileName = 'conditions.pdf';
        const path = (0, path_1.join)('assets', fileName);
        const file = fs.createReadStream(path);
        res.set({
            'Content-Type': 'application/vnd.android.package-archive',
            'Content-Disposition': `attachment; filename="${fileName}"`,
        });
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('conditions'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], DownloadController.prototype, "download", null);
DownloadController = __decorate([
    (0, common_1.Controller)('api/download'),
    __metadata("design:paramtypes", [])
], DownloadController);
exports.DownloadController = DownloadController;
//# sourceMappingURL=download.controller.js.map