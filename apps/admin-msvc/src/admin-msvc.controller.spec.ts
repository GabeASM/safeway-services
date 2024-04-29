import { Test, TestingModule } from '@nestjs/testing';
import { AdminMsvcController } from './admin-msvc.controller';
import { AdminMsvcService } from './admin-msvc.service';

describe('AdminMsvcController', () => {
  let adminMsvcController: AdminMsvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdminMsvcController],
      providers: [AdminMsvcService],
    }).compile();

    adminMsvcController = app.get<AdminMsvcController>(AdminMsvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(adminMsvcController.getHello()).toBe('Hello World!');
    });
  });
});
