import { Body, Controller, Post, UseGuards , Request, Get } from '@nestjs/common';
import { CreateEventDto } from './event.dto';
import { EventmsvcService } from './events.service';

@Controller('eventmsvc')
export class EventmsvcController {

    constructor(private readonly eventmsvc : EventmsvcService ){}

    @Post()
    createEvent(@Body() createEvent: CreateEventDto,) {
        return this.eventmsvc.createEvent(createEvent)
    }

    @Get('/saludo')
    hello(){
        return this.eventmsvc.hello()
    }

    @Get('/saludo-usuarios')
    helloFromUsers(){
        return this.eventmsvc.helloUsers()
    }

    @Get('/all')
    getAllEvents() {
        return this.eventmsvc.getAllEvents()
    }

}