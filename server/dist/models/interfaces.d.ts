import { Request } from "express";
export interface IRequstWithUserData extends Request {
    userId: number;
}
export declare const ROLES_KEY = "roles";
export declare const IS_PUBLIC_KEY = "isPublic";
export declare enum Role {
    User = "user",
    Admin = "admin"
}
