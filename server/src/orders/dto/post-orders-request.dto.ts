import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class PostOrdersRequestDto {

    @IsNotEmpty()
    fio: string

    @IsNotEmpty()
    name: string

    @IsOptional()
    description: string

    @IsNotEmpty()
    phone: string
}