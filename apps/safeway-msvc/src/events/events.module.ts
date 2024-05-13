import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventmsvcController } from './events.controllers';
import { EventmsvcService } from './events.service';

@Module(
    {
        imports: [
            ClientsModule.register([
                {
                    name: 'EVENT_SERVICE',
                    transport: Transport.TCP,
                    options: {
                        host: 'eventos',
                        port: 3000
                    }

                }
            ])
        ],
        controllers: [EventmsvcController],
        providers: [EventmsvcService]
    }
)
export class EventsModule { }
