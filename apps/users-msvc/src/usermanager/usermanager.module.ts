import { Module } from '@nestjs/common';
import { UserManagerController } from './usermanager.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ReportUserEntity } from './reportuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ReportUserEntity])],
  controllers: [UserManagerController],
  providers: [UserService],
  exports: [UserService]
})
export class UsermanagerModule {}
