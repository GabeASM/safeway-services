import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NotimanagerService } from './notimanager.service';

@Controller('notimanager')
export class NotimanagerController {

    constructor(private readonly notificationService : NotimanagerService){}

    @MessagePattern({cmd : 'create_notis'})
    createUser(@Body() eventsDataNotifications : []){
        console.log(eventsDataNotifications)
        return this.notificationService.createNotification(eventsDataNotifications)
    }
}
