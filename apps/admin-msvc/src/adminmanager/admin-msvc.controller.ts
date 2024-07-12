import { Body, Controller, Get } from '@nestjs/common';
import { AdminMsvcService } from './admin-msvc.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AdminMsvcController {
  constructor(private readonly adminMsvcService: AdminMsvcService) {}

  @MessagePattern({cmd : 'get_admin'})
  createUser(@Body() mailAdmin : {mail: string}){
      return this.adminMsvcService.findAdmin(mailAdmin)
  }
}
