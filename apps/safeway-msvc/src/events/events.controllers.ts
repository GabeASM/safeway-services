import { Body, Controller, Post, UseGuards, Request, Get, Req } from '@nestjs/common';
import { CreateEventDto } from './event.dto';
import { EventmsvcService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CustomRequest } from './interfaces';

@Controller('eventmsvc')
export class EventmsvcController {

    constructor(private readonly eventmsvc: EventmsvcService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    createEvent(@Body() createEvent: CreateEventDto, @Req() req: CustomRequest) {
        const user = req.user;
        const userId = user.userId;
        createEvent.userId = Number(userId) 
        return this.eventmsvc.createEvent(createEvent);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/event')
    getUserEvents(@Req() req: CustomRequest){
        const user = req.user;
        const userId = user.userId;

        return this.eventmsvc.getUserEvents(userId);
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