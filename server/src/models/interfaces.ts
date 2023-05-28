import { Request } from "express";

export interface IRequstWithUserData extends Request {
    userId: number
}

export const ROLES_KEY = 'roles'
export const IS_PUBLIC_KEY = 'isPublic'

export enum Role {
    User = 'user',
    Admin = 'admin',
}