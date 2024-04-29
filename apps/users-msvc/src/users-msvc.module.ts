import { Module } from '@nestjs/common';
import { UsersMsvcController } from './users-msvc.controller';
import { UsersMsvcService } from './users-msvc.service';

@Module({
  imports: [],
  controllers: [UsersMsvcController],
  providers: [UsersMsvcService],
})
export class UsersMsvcModule {}
