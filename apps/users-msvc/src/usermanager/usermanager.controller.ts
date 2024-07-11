import { Body, Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { CreateUser } from "./dto/createuser.dto";
import { UserService } from "./user.service";
import { UserReported } from "./dto/reportuser.dto";

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

    @MessagePattern({cmd: 'check_user_login'})
    checkUserLogin(@Body() usermail : {mail: string}){
        console.log(usermail)
        return this.userSerivce.findUserByMail(usermail.mail)
    }

    @MessagePattern({cmd: 'get_user_data_by_username'})
    userDataByUserName(@Body() userData : {username : string}){
        console.log('estoy en el micro servicio -> ' , userData.username)
        return this.userSerivce.findUserByUserName(userData);
    }
    @MessagePattern({cmd: 'get_user_data_by_id'})
    userDataById(@Body() userByID: { userID: string }){
        return this.userSerivce.findUserById(userByID);
    }

    @MessagePattern({cmd: 'report_user'})
    reportUser(@Body() report : UserReported){
        return this.userSerivce.reportUser(report);
    }
}