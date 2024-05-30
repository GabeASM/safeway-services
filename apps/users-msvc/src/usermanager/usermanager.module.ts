import { Module } from '@nestjs/common';
import { UserManagerController } from './usermanager.controller';

@Module({
  controllers: [UserManagerController],
  providers: []
})
export class UsermanagerModule {}
