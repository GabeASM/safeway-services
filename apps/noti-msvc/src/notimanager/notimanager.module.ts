import { Module } from '@nestjs/common';
import { NotimanagerController } from './notimanager.controller';
import { NotimanagerService } from './notimanager.service';

@Module({
  controllers: [NotimanagerController],
  providers: [NotimanagerService]
})
export class NotimanagerModule {}
