import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersMsvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
