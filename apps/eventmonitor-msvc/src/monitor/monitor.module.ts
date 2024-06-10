import { Module } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LocationGateway } from './monitor.gatewaysocket';

@Module({
  imports: [
    ClientsModule.register([
        {
            name: 'EVENT_SERVICE',
            transport: Transport.TCP,
            options: {
                host: 'eventos',
                port: 3000
            }

        },
        {
          name: 'NOTI_SERVICE',
          transport: Transport.TCP,
          options: {
              host: 'notificaciones',
              port: 3002
          }

      }
    ])
],
  providers: [MonitorService, LocationGateway]
})
export class MonitorModule {}
