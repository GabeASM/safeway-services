import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { UsermsvcService } from './users.services';
import { CreateUser, UserData } from './user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
        return this.usermsvc.getUsers()
    }
    @UseGuards(JwtAuthGuard)
    @Get('/userData')
    getUserData(@Body() userData : UserData){
        return this.usermsvc.getuserDataByUserName(userData);
    }
}