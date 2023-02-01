import { Test, TestingModule } from '@nestjs/testing';
import { IgnoreService } from './ignore.service';

describe('IgnoreService', () => {
  let service: IgnoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IgnoreService],
    }).compile();

    service = module.get<IgnoreService>(IgnoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
