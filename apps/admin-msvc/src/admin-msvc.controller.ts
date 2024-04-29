import { Controller, Get } from '@nestjs/common';
import { AdminMsvcService } from './admin-msvc.service';

@Controller()
export class AdminMsvcController {
  constructor(private readonly adminMsvcService: AdminMsvcService) {}

  @Get()
  getHello(): string {
    return this.adminMsvcService.getHello();
  }
}
