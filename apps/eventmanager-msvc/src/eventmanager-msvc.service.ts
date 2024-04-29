import { Injectable } from '@nestjs/common';

@Injectable()
export class EventmanagerMsvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
