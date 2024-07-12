import { Module } from '@nestjs/common';
import { AdminMsvcService } from './adminmanager/admin-msvc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './adminmanager/admin.entity';
import { AdminMsvcController } from './adminmanager/admin-msvc.controller';
import { AdminmanagerModule } from './adminmanager/adminmanager.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgresql14-admin',
    port: 5432,
    username: 'postgres',
    password: 'postgres-admin-poseidon',
    database: 'safeway_admin',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),AdminmanagerModule],
})
export class AdminMsvcModule {}
