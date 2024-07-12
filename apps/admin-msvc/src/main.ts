import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AdminMsvcModule } from './admin-msvc.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AdminMsvcModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'admins',
        port: 3003,
      },
    },
  );
  await app.listen();
}
bootstrap();
