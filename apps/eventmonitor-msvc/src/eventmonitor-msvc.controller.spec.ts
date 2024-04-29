import { Test, TestingModule } from '@nestjs/testing';
import { EventmonitorMsvcController } from './eventmonitor-msvc.controller';
import { EventmonitorMsvcService } from './eventmonitor-msvc.service';

describe('EventmonitorMsvcController', () => {
  let eventmonitorMsvcController: EventmonitorMsvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventmonitorMsvcController],
      providers: [EventmonitorMsvcService],
    }).compile();

    eventmonitorMsvcController = app.get<EventmonitorMsvcController>(EventmonitorMsvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventmonitorMsvcController.getHello()).toBe('Hello World!');
    });
  });
});
