import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsermsvcController } from './users.controller';
import { UsermsvcService } from './users.services';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'USER_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'usuarios',
                    port: 3001
                }

            }
        ])
    ],
    controllers: [UsermsvcController],
    providers: [UsermsvcService]
})
export class UsersModule {}
