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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const process_1 = require("process");
const interfaces_1 = require("../models/interfaces");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const users_1 = require("../database/entities/users");
const typeorm_2 = require("typeorm");
let AuthGuard = class AuthGuard {
    constructor(jwtService, usersRepository, reflector) {
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(interfaces_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic)
            return true;
        const roles = this.reflector.getAllAndOverride(interfaces_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const avalibleRoles = roles ? roles : [];
        let request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const jwtOptions = {
                secret: process_1.env['JWT_SECRET']
            };
            const payload = await this.jwtService.verifyAsync(token, jwtOptions);
            const userId = payload.sub;
            request.userId = userId;
            if (avalibleRoles.includes(interfaces_1.Role.Admin)) {
                const options = {
                    where: {
                        id: userId
                    }
                };
                const user = await this.usersRepository.findOne(options);
                if (!user.isAdmin)
                    return false;
            }
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(users_1.UserEntity)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository,
        core_1.Reflector])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map