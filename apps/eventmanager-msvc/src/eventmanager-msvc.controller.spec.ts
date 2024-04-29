import { Test, TestingModule } from '@nestjs/testing';
import { EventmanagerMsvcController } from './eventmanager-msvc.controller';
import { EventmanagerMsvcService } from './eventmanager-msvc.service';

describe('EventmanagerMsvcController', () => {
  let eventmanagerMsvcController: EventmanagerMsvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventmanagerMsvcController],
      providers: [EventmanagerMsvcService],
    }).compile();

    eventmanagerMsvcController = app.get<EventmanagerMsvcController>(EventmanagerMsvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventmanagerMsvcController.getHello()).toBe('Hello World!');
    });
  });
});
