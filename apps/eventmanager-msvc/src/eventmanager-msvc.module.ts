import { Module } from '@nestjs/common';
import { ManagerModule } from './manager/manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres14-safeway-eventos',
      port: 5432,
      username: 'postgres',
      password: 'postgres-eventos-atenea',
      database: 'safeway_events',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ManagerModule],
})
export class EventmanagerMsvcModule { }
