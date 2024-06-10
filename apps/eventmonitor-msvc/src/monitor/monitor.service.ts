import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { UserPosition } from './dto/userposition.dto';
@Injectable()
export class MonitorService {
    constructor(@Inject('EVENT_SERVICE') private eventClient: ClientProxy , @Inject('NOTI_SERVICE') private notiClient: ClientProxy) { }

    async findNearbyEventsFromMsvcEvents(longitude: number, latitude: number) {
        const userPosition = {
            longitude,
            latitude,
        }
        return this.eventClient.send({ cmd: 'get_events_by_position' }, userPosition);
    }

    async sendEventsToNotiMsvc(userPosition : UserPosition,  socketio : string) {
        const eventsNearBy = await firstValueFrom(
            this.eventClient.send({cmd: 'get_events_by_position'} , userPosition)
        )


        if(eventsNearBy.length === 0){
            return false;
        }

        console.log('eventos obtenidos desde el msvc de eventos -> ' , eventsNearBy)

        const eventsDataNotifications = eventsNearBy.map(event => ({
            idEvent: event.id,
            category: event.category,
            eventDescription: event.description,
            eventCreatedDate: event.createdAt,
            socketId: socketio
        }));


        console.log('notificaciones a enviar ->' , eventsDataNotifications )
        
        
        const notis = await firstValueFrom(this.notiClient.send({cmd :'create_notis'}, eventsDataNotifications))
        
        return notis
    }
}
