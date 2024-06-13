import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    image: string
    @Column()
    category: string
    @Column()
    description: string
    
    @Column({ type: 'double precision' })
    latitude: number;

    @Column({ type: 'double precision' })
    longitude: number;

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column()
    userId : number;
}