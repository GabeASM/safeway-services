import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser } from './user.dto';


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
}