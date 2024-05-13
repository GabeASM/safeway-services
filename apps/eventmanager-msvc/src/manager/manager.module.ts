import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventeManagerService } from './manager.service';
import { EventController } from './manager.controller';
import { Event } from './event.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventeManagerService]
})
export class ManagerModule {}
