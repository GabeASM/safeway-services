import { Module } from '@nestjs/common';
import { NotimanagerController } from './notimanager.controller';
import { NotimanagerService } from './notimanager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacionEntity } from './notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotificacionEntity])],
  
  controllers: [NotimanagerController],
  providers: [NotimanagerService]
})
export class NotimanagerModule {}
