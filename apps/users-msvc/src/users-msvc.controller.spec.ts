import { Test, TestingModule } from '@nestjs/testing';
import { UsersMsvcController } from './users-msvc.controller';
import { UsersMsvcService } from './users-msvc.service';

describe('UsersMsvcController', () => {
  let usersMsvcController: UsersMsvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersMsvcController],
      providers: [UsersMsvcService],
    }).compile();

    usersMsvcController = app.get<UsersMsvcController>(UsersMsvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(usersMsvcController.getHello()).toBe('Hello World!');
    });
  });
});
