import { Module } from '@nestjs/common';
import { UserManagerController } from './usermanager.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserManagerController],
  providers: [UserService],
  exports: [UserService]
})
export class UsermanagerModule {}
