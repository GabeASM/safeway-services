import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('events_reported')
export class EventReport {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    originalIdEvent: string
    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    reportCreated : Date
    @Column()
    reason: string
    @Column()
    userIdCreator : number;
    
}