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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const catalog_module_1 = require("./catalog/catalog.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const catalog_1 = require("./database/entities/catalog");
const orders_1 = require("./database/entities/orders");
const orders_module_1 = require("./orders/orders.module");
const auth_module_1 = require("./auth/auth.module");
const users_1 = require("./database/entities/users");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./guards/auth.guard");
const process_1 = require("process");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
        console.log();
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            catalog_module_1.CatalogModule,
            orders_module_1.OrdersModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: process_1.env.DB_TYPE,
                host: process_1.env.DB_HOST,
                port: +process_1.env.DB_PORT,
                username: process_1.env.DB_USERNAME,
                password: process_1.env.DB_PASSWORD,
                database: process_1.env.DB_DATABASE,
                entities: [catalog_1.CatalogEntity, orders_1.OrderEntity, users_1.UserEntity],
                synchronize: true,
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map