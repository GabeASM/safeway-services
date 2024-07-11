import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEventDto, ReportEventDto } from './event.dto';


@Injectable()
export class EventmsvcService {
    constructor(@Inject('EVENT_SERVICE') private eventClient: ClientProxy) { }
    
    
    async createEvent(event: CreateEventDto) {
        return this.eventClient.send({cmd: 'new_event'}, event);
    }
    async getUserEvents(userId: string) {
        const userIdNumber = Number(userId)
        return this.eventClient.send({cmd : 'user_events'} , userIdNumber) 
        
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
    
    async getEventById(eventId: string) {
        const eventIdNumber = Number(eventId)
        return this.eventClient.send({cmd : 'event_id'} , eventIdNumber) 
    }

    async reportEvent(report: ReportEventDto) {
        console.log('evento reportado -> ',  report.id)
        console.log('evento reportado -> ',  report.reason)

        return this.eventClient.send({cmd : 'report_event_by_id' } , report)
    }
    
}