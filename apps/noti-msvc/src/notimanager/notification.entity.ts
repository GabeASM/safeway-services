import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class NotificacionEntity{
    @PrimaryGeneratedColumn()
    id : number 

    @Column()
    category : string 

    @Column()
    idEvent : number

    @Column()
    eventCreatedDate : Date
    
    @Column()
    eventDescription : string

    @Column({type : 'timestamp' ,default : () => 'CURRENT_TIMESTAMP'})
    createdAt : Date

    @Column()
    socketId : string
}