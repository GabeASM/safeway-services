import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser, ReportUserDto, UserData } from './user.dto';


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
        console.log('fui llamado')
        return this.userClient.send({cmd : 'get_user_data_by_username'} , userData)
    }
    getUserDataById(userByID: { userID: string }) {
        return this.userClient.send({cmd: 'get_user_data_by_id'}, userByID)
    }
    reportUser(report: ReportUserDto) {
        return this.userClient.send({cmd: 'report_user'}, report)

    }
    
}