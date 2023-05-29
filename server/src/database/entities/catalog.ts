import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'catalog'})
export class CatalogEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date

    @Column()
    info: string

    @Column()
    year: string

    @Column()
    mass: string

    @Column()
    country: string

    @Column()
    class: string

    @Column()
    brand: string 

    @Column()
    model: string

    @Column()
    shape: string

    @Column()
    fuel: string

    @Column()
    image: string

    @Column()
    price: number
}