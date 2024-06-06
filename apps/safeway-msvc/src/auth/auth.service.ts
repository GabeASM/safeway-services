import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegisterAuthDto } from './dto/register.dto';
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login.dto';
import { firstValueFrom } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(@Inject('USER_SERVICE') private userClient: ClientProxy, private jwtAuthService : JwtService) { }

    async register(userRegister: RegisterAuthDto) {
        const password = userRegister.password
        const plainToHash = await hash(password, 10)
        userRegister = { ...userRegister, password: plainToHash }

        return this.userClient.send({ cmd: 'new_user' }, userRegister)
    }

    async login(userLogin: LoginAuthDto) {

        const userFound : UserDto = await firstValueFrom(
            this.userClient.send({ cmd: 'check_user_login' }, userLogin.mail)
        )
        const checkPassword = await compare(userLogin.password, userFound.password)

        if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403)
        
        const payload = {id: userFound.id , userName : userFound.username}
    
        const token = this.jwtAuthService.sign(payload)


        const data = {
            user: userFound,
            token
        }
        
        return data
    }
}
