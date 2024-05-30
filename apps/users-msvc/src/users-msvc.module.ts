import { Module } from '@nestjs/common';
import { UsersMsvcController } from './users-msvc.controller';
import { UsersMsvcService } from './users-msvc.service';
import { UsermanagerModule } from './usermanager/usermanager.module';

@Module({
  imports: [UsermanagerModule],
  controllers: [UsersMsvcController],
  providers: [UsersMsvcService],
})
export class UsersMsvcModule {}
