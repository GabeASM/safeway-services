import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UsersMsvcModule } from './users-msvc.module'; // Asegúrate de importar el módulo correcto

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersMsvcModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'usuarios',
        port: 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
