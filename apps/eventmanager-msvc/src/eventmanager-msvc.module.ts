import { Module } from '@nestjs/common';
import { EventmanagerMsvcController } from './eventmanager-msvc.controller';
import { EventmanagerMsvcService } from './eventmanager-msvc.service';

@Module({
  imports: [],
  controllers: [EventmanagerMsvcController],
  providers: [EventmanagerMsvcService],
})
export class EventmanagerMsvcModule {}
