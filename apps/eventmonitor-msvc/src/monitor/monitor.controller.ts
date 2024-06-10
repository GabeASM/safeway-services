// import { Body, Controller, Get, Query } from '@nestjs/common';
// import { MonitorService } from './monitor.service';

// @Controller('monitor')
// export class MonitorController {

//     constructor(private readonly monitorService: MonitorService) { }

//     @Get('/events/nearby')
//     async getNearbyEvents(
//         @Query('latitude') latitude: number,
//         @Query('longitude') longitude: number,) {
        

//         console.log(`posision actual de latitud es -> ${latitude}`)
//         console.log(`posision actual de longitud es -> ${longitude}`)

//         return this.monitorService.findNearbyEventsFromMsvcEvents(latitude , longitude , 1)
//     }
// }
