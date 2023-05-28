import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date

    @Column()
    login: string

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    password: string

    @Column()
    isAdmin: boolean

}