import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUser } from './dto/createuser.dto';
import { UserReported } from './dto/reportuser.dto';
import { ReportUserEntity } from './reportuser.entity';

@Injectable()
export class UserService {


    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(ReportUserEntity) private readonly reportRepository: Repository<ReportUserEntity>
    ) { }

    getHello(): string {
        return 'Hello World!';
    }

    async createUser(createUser: CreateUser) {
        const newUser = this.userRepository.create(createUser)
        const userSaved = await this.userRepository.save(newUser)
        return userSaved
    }

    async getAllUsers() {
        return this.userRepository.find()
    }
    async findUserByMail(mail: string) {
        const user = await this.userRepository.findOne({
            where: {
                mail
            }
        })
        if (!user) throw new HttpException('USER_NOT_FOUND', 404)

        return user
    }

    async findUserByUserName(userData: { username: string; }) {
        const username = userData.username;
        const user = await this.userRepository.findOne({
            where: {
                username
            }
        })
        console.log('usuario encontrado -> ' + user)
        if (!user) throw new HttpException('USER_NOT_FOUND', 404)

        return user;
    }

    async findUserById(userByID: { userID: string }) {
        console.log('este es el id recibido -> ', userByID.userID)
        
        const userFound = await this.userRepository.findOne({ where: { id: userByID.userID } })
        if (!userFound) throw new HttpException('USER_NOT_FOUND', 404)
        
        console.log('este es el usuario retornado -> ' , userFound)

        return userFound
    }

    async reportUser(report: UserReported) {
        const userFound = await this.userRepository.findOne({ where: { id: report.originalUserID } })
        if (!userFound) throw new HttpException('USER_NOT_FOUND', 404)

        const newUserReported = {
            originalUserID: report.originalUserID,
            username: report.username,
            reason: report.reason
        }

        const newReportUserCreated = this.reportRepository.create(newUserReported);
        const reportSaved = await this.reportRepository.save(newReportUserCreated);
        return reportSaved;
    }


}
