import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('admins')
export class Admin {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    mail: string
    @Column()
    password: string
    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}