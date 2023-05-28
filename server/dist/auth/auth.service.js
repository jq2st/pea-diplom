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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_1 = require("../database/entities/users");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const process_1 = require("process");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async login(data) {
        const options = {
            where: {
                login: data.login
            }
        };
        const user = await this.usersRepository.findOne(options);
        if (!user) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        const login = user.login;
        const password = user.password;
        const isMatch = await bcrypt.compare(data.password, password);
        if (!isMatch) {
            throw new common_1.HttpException('Wrong User Password', common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = {
            login: login,
            sub: user.id
        };
        const jwtOptions = {
            secret: process_1.env.JWT_SECRET
        };
        try {
            const token = await this.jwtService.signAsync(payload, jwtOptions);
            const body = { token };
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async register(data, isAdmin = false) {
        const options = {
            where: {
                login: data.login
            }
        };
        const existUser = await this.usersRepository.findOne(options);
        if (existUser) {
            throw new common_1.HttpException('User Exists', common_1.HttpStatus.CONFLICT);
        }
        try {
            const saltRounds = 15;
            const password = await bcrypt.hash(data.password, saltRounds);
            const user = Object.assign(Object.assign({}, data), { password: password, isAdmin: isAdmin ? isAdmin : false });
            const userEntity = this.usersRepository.create(user);
            await this.usersRepository.save(userEntity);
            return Promise.resolve({});
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map