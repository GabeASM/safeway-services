import { Module } from '@nestjs/common';
import { NotiMsvcController } from './noti-msvc.controller';
import { NotiMsvcService } from './noti-msvc.service';

@Module({
  imports: [],
  controllers: [NotiMsvcController],
  providers: [NotiMsvcService],
})
export class NotiMsvcModule {}
