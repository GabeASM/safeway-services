import { NestFactory } from '@nestjs/core';
import { NotiMsvcModule } from './noti-msvc.module';

async function bootstrap() {
  const app = await NestFactory.create(NotiMsvcModule);
  await app.listen(3000);
}
bootstrap();
