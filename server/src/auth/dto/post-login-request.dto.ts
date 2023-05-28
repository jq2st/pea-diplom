import { IsNotEmpty } from "class-validator";

export class PostLoginRequestDto {
    @IsNotEmpty()
    login: string

    @IsNotEmpty()
    password: string
}