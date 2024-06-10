import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificacionEntity } from './notification.entity';
import { CreateNoti } from './dto/createnotification.dto';

@Injectable()
export class NotimanagerService {

    constructor(@InjectRepository(NotificacionEntity) private readonly notificationRepository : Repository<NotificacionEntity>){}


    async createNotification(createNotification : []){
        const newNotification = this.notificationRepository.create(createNotification)
        const notiSaved = await this.notificationRepository.save(newNotification)
        return notiSaved
    }

    
}
