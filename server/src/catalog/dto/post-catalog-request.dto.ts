import { IsNotEmpty } from "class-validator"

export class PostCatalogRequestDto {
    @IsNotEmpty()
    info: string

    @IsNotEmpty()
    year: string

    @IsNotEmpty()
    mass: string

    @IsNotEmpty()
    country: string

    @IsNotEmpty()
    class: string

    @IsNotEmpty()
    brand: string 

    @IsNotEmpty()
    model: string

    @IsNotEmpty()
    shape: string

    @IsNotEmpty()
    fuel: string

    @IsNotEmpty()
    image: string

    @IsNotEmpty()
    price: number
}