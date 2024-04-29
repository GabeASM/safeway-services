import { NestFactory } from '@nestjs/core';
import { AdminMsvcModule } from './admin-msvc.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminMsvcModule);
  await app.listen(3000);
}
bootstrap();
