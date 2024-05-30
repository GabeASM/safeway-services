import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEventDto } from './event.dto';


@Injectable()
export class EventmsvcService {
    constructor(@Inject('EVENT_SERVICE') private eventClient: ClientProxy) { }

    
    async createEvent(event: CreateEventDto) {
        return this.eventClient.send({cmd: 'new_event'}, event);
    }
    async getAllEvents() {
        return this.eventClient.send({ cmd: 'get_events' }, {});
    }
    async hello(){
        return this.eventClient.send({cmd: 'hello-event'}, {})
    }

    async helloUsers(){
        return this.eventClient.send({cmd : 'hello-users'}, {})
    }

}