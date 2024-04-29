import { NestFactory } from '@nestjs/core';
import { UsersMsvcModule } from './users-msvc.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersMsvcModule);
  await app.listen(3000);
}
bootstrap();
