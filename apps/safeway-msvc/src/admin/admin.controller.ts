import { Body, Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('adminmsvc')
export class AdminController {

constructor(private readonly adminmsvc: AdminService) {}

    @Get('/admin')
    getAdmin(@Body() mailAdmin : {mail: string}){
        return this.adminmsvc.getAdmin(mailAdmin)
    }
}
