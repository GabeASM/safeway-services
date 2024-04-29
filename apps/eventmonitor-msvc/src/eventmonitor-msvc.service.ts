import { Injectable } from '@nestjs/common';

@Injectable()
export class EventmonitorMsvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
