import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UsermanagerModule } from './usermanager/usermanager.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsermanagerModule,
    {
      transport: Transport.TCP,
      options: {
        host : 'usuarios',
        port: 3001,
        
      }
    },
  );
  await app.listen();
}
bootstrap();  