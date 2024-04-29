import { Injectable } from '@nestjs/common';

@Injectable()
export class NotiMsvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
