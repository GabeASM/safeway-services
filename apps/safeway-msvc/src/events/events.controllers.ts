import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { CreateEventDto } from './event.dto';
import { EventmsvcService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('eventmsvc')
export class EventmsvcController {

    constructor(private readonly eventmsvc: EventmsvcService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    createEvent(@Body() createEvent: CreateEventDto) {
        return this.eventmsvc.createEvent(createEvent)
    }

    @Get('/saludo')
    hello() {
        return this.eventmsvc.hello()
    }

    @Get('/saludo-usuarios')
    helloFromUsers() {
        return this.eventmsvc.helloUsers()
    }

    @Get('/all')
    getAllEvents() {
        return this.eventmsvc.getAllEvents()
    }

}