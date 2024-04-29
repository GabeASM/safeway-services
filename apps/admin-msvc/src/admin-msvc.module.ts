import { Module } from '@nestjs/common';
import { AdminMsvcController } from './admin-msvc.controller';
import { AdminMsvcService } from './admin-msvc.service';

@Module({
  imports: [],
  controllers: [AdminMsvcController],
  providers: [AdminMsvcService],
})
export class AdminMsvcModule {}
