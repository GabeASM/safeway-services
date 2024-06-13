import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/createevent.dto';
import { Event } from './event.entity';
import { ClientProxy } from '@nestjs/microservices';
import { UserPosition } from './dto/userposition.dto';

@Injectable()
export class EventeManagerService {
  
  constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>, @Inject('USER_SERVICE') private userClient: ClientProxy) { }
  
  getHello(): string {
    return 'Hello World!';
  }
  
  async createEvent(createEvent: CreateEventDto) {
    const newEvenet = this.eventRepository.create(createEvent)
    const event = await this.eventRepository.save(newEvenet)
    return event
  }
  async getUserEventsById(userId: number){
    const eventsById = await this.eventRepository.find({ where: { userId } });
    return eventsById;
  }

  async getAllEvents() {
    return this.eventRepository.find()
  }
  async helloFromUsers() {
    return this.userClient.send({ cmd: 'hello' }, {})
  }

  async findNearbyEvents2(userPosition: UserPosition) {
    console.log(`Esta es la latitud del usuario: ${userPosition.latitude}`);
    console.log(`Esta es la longitud del usuario: ${userPosition.longitude}`);

    const events: any[] = await this.eventRepository.query(`
        SELECT *, distance
        FROM (
            SELECT *, 
            (6371 * acos(cos(radians($1)) * cos(radians(latitude)) * cos(radians(longitude) - radians($2)) + sin(radians($1)) * sin(radians(latitude)))) AS distance 
            FROM events
        ) AS sub
        WHERE distance < $3
        ORDER BY distance
        LIMIT 10;
    `, [userPosition.latitude, userPosition.longitude, 50]);

    return events;
}


}
