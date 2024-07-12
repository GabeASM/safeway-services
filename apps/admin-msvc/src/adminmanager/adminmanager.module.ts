import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminMsvcController } from './admin-msvc.controller';
import { Admin } from './admin.entity';
import { AdminMsvcService } from './admin-msvc.service';

@Module({
    imports: [TypeOrmModule.forFeature([Admin])],
    controllers: [AdminMsvcController],
    providers: [AdminMsvcService],
})
export class AdminmanagerModule {}
