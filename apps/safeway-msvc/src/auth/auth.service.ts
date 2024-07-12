import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegisterAuthDto } from './dto/register.dto';
import { hash, compare } from 'bcrypt'
import { LoginAdminDto, LoginAuthDto } from './dto/login.dto';
import { firstValueFrom } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AuthService {
    
    
    constructor(@Inject('USER_SERVICE') private userClient: ClientProxy, private jwtAuthService : JwtService, @Inject('ADMIN_SERVICE') private adminClient: ClientProxy) { }
    
    async register(userRegister: RegisterAuthDto) {
        const password = userRegister.password
        const plainToHash = await hash(password, 10)
        userRegister = { ...userRegister, password: plainToHash }
        
        return this.userClient.send({ cmd: 'new_user' }, userRegister)
    }
    
    async login(userLogin: LoginAuthDto) {
        
        const userMail = {
            mail : userLogin.mail
        }
        const userFound : UserDto = await firstValueFrom(
            this.userClient.send({ cmd: 'check_user_login' }, userMail)
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
        async loginAdmin(adminObjectLogin: LoginAdminDto) {
            const adminMail = {
                mail: adminObjectLogin.mail
            }
            const adminFound : AdminDto = await firstValueFrom(
                this.adminClient.send({ cmd: 'get_admin'}, adminMail)
            )
            if(adminFound.password == adminObjectLogin.password){
                const payload = {id: adminFound.id, mail: adminFound.mail}

                const token = this.jwtAuthService.sign(payload)

                const data = {
                    admin: adminFound,
                    token
                }

                return data
            }
            throw new HttpException('PASSWORD_INCORRECT', 403)
        }
    }
