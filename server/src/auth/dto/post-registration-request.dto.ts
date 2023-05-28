import { IsEmail, IsNotEmpty } from 'class-validator';

export class PostRegistrationRequestDto {

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    phone: string

    @IsEmail()
    login: string

    @IsNotEmpty()
    password: string
}