import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users_reported')
export class ReportUserEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    originalUserID: string

    @Column()
    username: string

    @Column()
    reason : string  

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}