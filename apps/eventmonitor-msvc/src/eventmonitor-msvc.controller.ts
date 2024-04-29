import { Controller, Get } from '@nestjs/common';
import { EventmonitorMsvcService } from './eventmonitor-msvc.service';

@Controller()
export class EventmonitorMsvcController {
  constructor(private readonly eventmonitorMsvcService: EventmonitorMsvcService) {}

  @Get()
  getHello(): string {
    return this.eventmonitorMsvcService.getHello();
  }
}
