import { Body, Controller, Post, UseGuards, Request, Get, Req, Param, Delete } from '@nestjs/common';
import { CreateEventDto, ReportEventDto } from './event.dto';
import { EventmsvcService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CustomRequest } from './interfaces';
import { identity } from 'rxjs';

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

    @UseGuards(JwtAuthGuard)
    @Get('/:eventId')
    getEventById(@Param('eventId') eventId: string) {
        return this.eventmsvc.getEventById(eventId)
    }

    @Get()
    getAllEvents2() {
        return this.eventmsvc.getAllEvents()
    }

    @Get('/all')
    getAllEvents() {
        return this.eventmsvc.getAllEvents()
    }

    @Post('/report')
    reportEvent(@Body() report : ReportEventDto){
        console.log(report)
        return this.eventmsvc.reportEvent(report);
    }
    @Delete('/delete')
    deleteEvent(@Body() idEvent: {id: string}){
        return this.eventmsvc.deleteEvent(idEvent);
    }

}