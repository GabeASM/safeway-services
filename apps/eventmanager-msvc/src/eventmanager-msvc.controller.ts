import { Controller, Get } from '@nestjs/common';
import { EventmanagerMsvcService } from './eventmanager-msvc.service';

@Controller()
export class EventmanagerMsvcController {
  constructor(private readonly eventmanagerMsvcService: EventmanagerMsvcService) {}

  @Get()
  getHello(): string {
    return this.eventmanagerMsvcService.getHello();
  }
}
