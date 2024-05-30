import { Body, Controller, Post, UseGuards , Request, Get } from '@nestjs/common';
import { UsermsvcService } from './users.services';


@Controller('usermsvc')
export class UsermsvcController {

    constructor(private readonly usermsvc : UsermsvcService){}

    @Get('/saludo')
    hello(){
        return this.usermsvc.hello()
    }

}