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
    @Column()
    latidude: number
    @Column()
    longitude: number
}