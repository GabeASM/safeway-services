import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class UsermsvcService {
    constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) { }

    async hello(){
        return this.userClient.send({cmd: 'hello'}, {})
    }

}