import { Module } from '@nestjs/common';
import { EventmonitorMsvcController } from './eventmonitor-msvc.controller';
import { EventmonitorMsvcService } from './eventmonitor-msvc.service';

@Module({
  imports: [],
  controllers: [EventmonitorMsvcController],
  providers: [EventmonitorMsvcService],
})
export class EventmonitorMsvcModule {}
