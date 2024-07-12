import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'ADMIN_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'admins',
                    port: 3003
                }

            }
        ])
    ],
    controllers: [AdminController],
    providers: [AdminService]
})
export class AdminModule {}
