import { Body, Controller, Get } from '@nestjs/common';
import { EventeManagerService } from './manager.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateEventDto } from './dto/createevent.dto';
import { UserPosition } from './dto/userposition.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventeManagerService) { }

  @MessagePattern({ cmd: 'new_event' })
  createEvent(@Body() event: CreateEventDto) {
    return this.eventService.createEvent(event)
  }
  @MessagePattern({ cmd: 'hello-event' })
  getHello(): string {
    return this.eventService.getHello();
  }

  @MessagePattern({ cmd: 'user_events' })
  getUserEventById(@Body() id : number){
    return this.eventService.getUserEventsById(id);
  }
  
  
  
  @MessagePattern({ cmd: 'get_events' })
  getAllEvents() {
    return this.eventService.getAllEvents();
  }
  
  @MessagePattern({ cmd: 'event_id' })
  getEventById(@Body() id : string) {
    return this.eventService.getEventById(id);
  }





  @MessagePattern({cmd : 'get_events_by_position'})
  getNearbyEvents(@Body() userPosition : UserPosition){
    return this.eventService.findNearbyEvents2(userPosition)
  }

  @MessagePattern({ cmd: 'hello-users' })
  getHelloFromUsers() {
    return this.eventService.helloFromUsers();
  }
}
