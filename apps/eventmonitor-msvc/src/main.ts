import { NestFactory } from '@nestjs/core';
import { EventmonitorMsvcModule } from './eventmonitor-msvc.module';

async function bootstrap() {
  const app = await NestFactory.create(EventmonitorMsvcModule);
  await app.listen(3000);
}
bootstrap();
