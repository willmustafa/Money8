import { Test, TestingModule } from '@nestjs/testing';
import { IgnoreController } from './ignore.controller';
import { IgnoreService } from './ignore.service';

describe('IgnoreController', () => {
  let controller: IgnoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IgnoreController],
      providers: [IgnoreService],
    }).compile();

    controller = module.get<IgnoreController>(IgnoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
