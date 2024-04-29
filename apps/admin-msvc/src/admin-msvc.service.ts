import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminMsvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
