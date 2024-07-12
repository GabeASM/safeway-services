import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AdminService {
    constructor(@Inject('ADMIN_SERVICE') private adminClient: ClientProxy) { }

    async getAdmin(mailAdmin : {mail: string}) {
        return this.adminClient.send({cmd: 'get_admin'}, mailAdmin) 
    }
}
