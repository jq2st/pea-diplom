import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'orders'})
export class OrderEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date

    @Column()
    fio: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    phone: string

}