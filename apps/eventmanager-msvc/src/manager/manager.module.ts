import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventeManagerService } from './manager.service';
import { EventController } from './manager.controller';
import { Event } from './event.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [TypeOrmModule.forFeature([Event]),
  ClientsModule.register([
    {
      name: 'USER_SERVICE',
      transport: Transport.TCP,
      options: {
        host: 'usuarios',
        port: 3001
      }

    }
  ])],
  controllers: [EventController],
  providers: [EventeManagerService]
})
export class ManagerModule { }
