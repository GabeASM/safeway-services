import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MonitorService {
    constructor(@Inject('EVENT_SERVICE') private eventClient: ClientProxy) { }

    async findNearbyEventsFromMsvcEvents(longitude: number, latitude: number) {
        const userPosition = {
            longitude,
            latitude,
        }
        return this.eventClient.send({ cmd: 'get_events_by_position' }, userPosition);
    }

    async sendEventsToNotiMsvc(events: []){
        
    }
}
