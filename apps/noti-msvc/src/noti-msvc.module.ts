import { Module } from '@nestjs/common';
import { NotimanagerModule } from './notimanager/notimanager.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgres14-safeway-notificaciones',
    port: 5432,
    username: 'postgres',
    password: 'postgres-notificaciones-poseidon',
    database: 'safeway_noti',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),NotimanagerModule],
  controllers: [],
  providers: [],
})
export class NotiMsvcModule {}
