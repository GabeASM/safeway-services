import { NestFactory } from '@nestjs/core';
import { EventmanagerMsvcModule } from './eventmanager-msvc.module';

async function bootstrap() {
  const app = await NestFactory.create(EventmanagerMsvcModule);
  await app.listen(3000);
}
bootstrap();
