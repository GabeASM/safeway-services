import { Controller, Get } from '@nestjs/common';
import { NotiMsvcService } from './noti-msvc.service';

@Controller()
export class NotiMsvcController {
  constructor(private readonly notiMsvcService: NotiMsvcService) {}

  @Get()
  getHello(): string {
    return this.notiMsvcService.getHello();
  }
}
