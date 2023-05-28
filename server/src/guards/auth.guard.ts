import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from 'express';
import { JwtService } from "@nestjs/jwt";
import { env } from "process";
import { IRequstWithUserData, IS_PUBLIC_KEY, Role, ROLES_KEY } from "src/models/interfaces";
import { Reflector } from "@nestjs/core";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/database/entities/users";
import { Repository } from "typeorm";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private jwtService: JwtService,
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        private reflector: Reflector
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ])
        if (isPublic) return true;

        const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ])

        const avalibleRoles = roles ? roles : []

        let request: IRequstWithUserData = context.switchToHttp().getRequest()
        const token = request.headers.authorization
        if (!token) {
            throw new UnauthorizedException();
        }
       
        try {
            const jwtOptions = {
                secret: env['JWT_SECRET']
            }
            const payload = await this.jwtService.verifyAsync(token, jwtOptions);
            const userId = payload.sub
            request.userId = userId
            
            if (avalibleRoles.includes(Role.Admin)) {
                const options = {
                    where: {
                        id: userId
                    }
                }
                const user = await this.usersRepository.findOne(options)
                if (!user.isAdmin) return false;
            }
            return true;  
        } catch(error) {
            return false;
        }
    }

}