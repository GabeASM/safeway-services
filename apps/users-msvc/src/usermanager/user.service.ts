import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUser } from './dto/createuser.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository : Repository<User>){}

    getHello(): string {
        return 'Hello World!';
    }

    async createUser(createUser: CreateUser) {
        const newUser = this.userRepository.create(createUser)
        const userSaved = await this.userRepository.save(newUser)
        return userSaved
    }

    async getAllUsers(){
        return this.userRepository.find()
    }
    async findUserByMail(mail: string){
     const user = await this.userRepository.findOne({where: {
        mail 
     }})
    
     if(!user) throw new HttpException('USER_NOT_FOUND' ,404)
 
     return user
    }
}
