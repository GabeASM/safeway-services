import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsermsvcService } from './users.services';
import { CreateUser } from './user.dto';

@Controller('usermsvc')
export class UsermsvcController {

    constructor(private readonly usermsvc : UsermsvcService){}

    @Get('/saludo')
    hello(){
        return this.usermsvc.hello()
    }

    @Post('/create')
    createUser(@Body() newUser : CreateUser){
        return this.usermsvc.createUser(newUser)
    }

    @Get('/users')
    getUsers(){
        return this,this.usermsvc.getUsers()
    }
}