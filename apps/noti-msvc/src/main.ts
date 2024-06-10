import { NestFactory } from '@nestjs/core';
import { NotiMsvcModule } from './noti-msvc.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotiMsvcModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'notificaciones',
        port: 3002,
      },
    },
  );
  await app.listen();
}
bootstrap();
