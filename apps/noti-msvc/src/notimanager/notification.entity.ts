import { Column, PrimaryGeneratedColumn } from "typeorm"

export class Notificacion{
    @PrimaryGeneratedColumn()
    id : number 

    @Column()
    category : string 

    @Column({type : 'timestamp' ,default : () => 'CURRENT_TIMESTAMP'})
    createdAt : Date
}