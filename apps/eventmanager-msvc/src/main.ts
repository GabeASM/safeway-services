import { NestFactory } from '@nestjs/core';
import { EventmanagerMsvcModule } from './eventmanager-msvc.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EventmanagerMsvcModule,
    {
      transport: Transport.TCP,
      options: {
        host : 'eventos',
        port: 3000,
        
      }
    },
  );
  await app.listen();
}
bootstrap();  