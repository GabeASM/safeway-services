import { HttpException, Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto } from './admin.dto';

@Injectable()
export class AdminMsvcService {
  
  constructor(@InjectRepository(Admin) private readonly adminRepository : Repository<Admin>){}

  async onModuleInit() {
    await this.createDefaultAdmin();
  }
  async createAdmin(admin: AdminDto) {
    console.log('voy a crear admin')
    const newAdmin = this.adminRepository.create(admin)
    console.log('este es el administrador creado ', newAdmin)
    const adminSaved = await this.adminRepository.save(newAdmin)
    console.log('este es el administrador guardado ', adminSaved)


  }
  async findAdmin(mailAdmin: { mail: string; }) {
    const entity = await this.adminRepository.findOne({where:{mail: mailAdmin.mail}})
    if(!entity) {
      throw new HttpException('ADMIN_NOT_FOUND', 404)
    }
    return entity
  }
  
  private async createDefaultAdmin() {
    console.log('entre a la funcion para crear admin')
    const defaultAdmin = {
      mail: 'dani@email.com',
      password: 'hola1234'
    }

    console.log('voy a crear el admin')
      await this.createAdmin(defaultAdmin)
    console.log('admin creado')
    
  }
}
