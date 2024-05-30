import { Body, Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { CreateUser } from "./dto/createuser.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserManagerController{ 

    constructor(private readonly userSerivce : UserService){}


    @MessagePattern({cmd: 'hello'})
    hello(){
        return 'este es un saludo desde el msvc de usuarios'
    }


    @MessagePattern({cmd : 'new_user'})
    createUser(@Body() newUser : CreateUser){
        return this.userSerivce.createUser(newUser)
    }
    @MessagePattern({cmd : 'get_users'})
    getAllUsers(){
        return this.userSerivce.getAllUsers()
    }
}