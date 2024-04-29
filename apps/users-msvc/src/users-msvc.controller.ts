import { Controller, Get } from '@nestjs/common';
import { UsersMsvcService } from './users-msvc.service';

@Controller()
export class UsersMsvcController {
  constructor(private readonly usersMsvcService: UsersMsvcService) {}

  @Get()
  getHello(): string {
    return this.usersMsvcService.getHello();
  }
}
