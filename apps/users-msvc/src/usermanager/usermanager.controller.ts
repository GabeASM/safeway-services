import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller('users')
export class UserManagerController{ 

    @MessagePattern({cmd: 'hello'})
    hello(){
        return 'este es un saludo desde el msvc de usuarios'
    }
}