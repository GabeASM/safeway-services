import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/createevent.dto';
import { Event } from './event.entity';
import { ClientProxy } from '@nestjs/microservices';
import { UserPosition } from './dto/userposition.dto';

@Injectable()
export class EventeManagerService {

    constructor(@InjectRepository(Event) private readonly eventRepository : Repository<Event> ,@Inject('USER_SERVICE') private userClient: ClientProxy ) { }

    getHello(): string {
        return 'Hello World!';
    }

    async createEvent(createEvent: CreateEventDto) {
        const newEvenet = this.eventRepository.create(createEvent)
        const event = await this.eventRepository.save(newEvenet)
        return event 
    }

    async getAllEvents(){
        return this.eventRepository.find()
    }
    async helloFromUsers(){
        return this.userClient.send({cmd: 'hello'}, {})
    }

    async findNearbyEvents(userPosition : UserPosition){

        const events = await this.eventRepository.query(`
            SELECT *, 
              (6371 * acos(cos(radians($1)) * cos(radians(latitude)) * cos(radians(longitude) - radians($2)) + sin(radians($1)) * sin(radians(latitude)))) AS distance 
            FROM event
            HAVING distance < $3
            ORDER BY distance
            LIMIT 10
          `, [userPosition.latitude, userPosition.longitude, userPosition.radius]);
      
          return events;
    }
}
