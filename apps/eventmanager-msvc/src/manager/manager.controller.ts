import { Body, Controller, Get } from '@nestjs/common';
import { EventeManagerService } from './manager.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateEventDto } from './dto/createevent.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventeManagerService ) {}

  @MessagePattern({cmd :'new_event'})
  createEvent(@Body() event : CreateEventDto) {
    return this.eventService.createEvent(event)
  }
  @MessagePattern({cmd :'hello-event'})
  getHello(): string {
    return this.eventService.getHello();
  }
  
  @MessagePattern({cmd :'hello-users'})
  getHelloFromUsers() {
    return this.eventService.helloFromUsers();
  }


  @MessagePattern({cmd : 'get_events'})
  getAllEvents(){
    return this.eventService.getAllEvents();
  }
}
