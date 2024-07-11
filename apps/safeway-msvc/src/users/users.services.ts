import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser, UserData } from './user.dto';


@Injectable()
export class UsermsvcService {
    constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) { }
    
    async hello(){
        return this.userClient.send({cmd: 'hello'}, {})
    }
    
    async createUser(newUser : CreateUser){
        return this.userClient.send({cmd: 'new_user'} , newUser)
    }
    
    async getUsers(){
        return this.userClient.send({cmd: 'get_users'} ,{})
    }
    
    async getuserDataByUserName(userData: UserData) {
        return this.userClient.send({cmd : 'get_user_data_by_username'} , userData)
    }
}