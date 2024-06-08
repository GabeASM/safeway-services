import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('/register')
    createUser(@Body() newUser : RegisterAuthDto){
        return this.authService.register(newUser)
    }
    @Post('/login')
    loginUser(@Body() userObjectLogin: LoginAuthDto){
        return this.authService.login(userObjectLogin)
    }
}
