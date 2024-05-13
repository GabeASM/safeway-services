import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/createevent.dto';
import { Event } from './event.entity';

@Injectable()
export class EventeManagerService {

    constructor(@InjectRepository(Event) private readonly eventRepository : Repository<Event>) { }

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
}
