import { Module } from '@nestjs/common';
import { UsermanagerModule } from './usermanager/usermanager.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres14-safeway-usuarios',
      port: 5432,
      username: 'postgres',
      password: 'postgres-usuarios-ares',
      database: 'safeway_users',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
    ,UsermanagerModule],
})
export class UsersMsvcModule {}
