import { Test, TestingModule } from '@nestjs/testing';
import { NotiMsvcController } from './noti-msvc.controller';
import { NotiMsvcService } from './noti-msvc.service';

describe('NotiMsvcController', () => {
  let notiMsvcController: NotiMsvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotiMsvcController],
      providers: [NotiMsvcService],
    }).compile();

    notiMsvcController = app.get<NotiMsvcController>(NotiMsvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notiMsvcController.getHello()).toBe('Hello World!');
    });
  });
});
