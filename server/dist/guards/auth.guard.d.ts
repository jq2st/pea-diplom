import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { UserEntity } from "src/database/entities/users";
import { Repository } from "typeorm";
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private usersRepository;
    private reflector;
    constructor(jwtService: JwtService, usersRepository: Repository<UserEntity>, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
